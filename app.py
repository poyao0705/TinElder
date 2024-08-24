from flask import Flask, logging, request, jsonify, session
from flask_cors import CORS, cross_origin  # Import CORS
import sqlite3
from flask import g

app = Flask(__name__)

app.secret_key = 'syncs hack 2024'

# Enable CORS for the specific frontend origin
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
# logging.getLogger('flask_cors').level = logging.DEBUG

DATABASE = 'database.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

def init_db():
    db = get_db()
    with app.open_resource('schema.sql', mode='r') as f:
        db.cursor().executescript(f.read())
    db.commit()

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/signup', methods=['GET','POST'])
@cross_origin()
# @cross_origin()
def signup():
    # if request.method == 'OPTIONS':
    #     return build_cors_preflight_response()
    
    if request.is_json:
        data = request.json
        username = data.get('username')
        phone_number = data.get('phone_number')
        pin = data.get('pin')


        if len(pin) != 4 or not pin.isdigit():
            return jsonify({"message": "PIN must be exactly 4 digits."}), 400

        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM users WHERE username = ? OR phone_number = ?", (username, phone_number))
        existing_user = cursor.fetchone()

        if existing_user:
            return jsonify({"message": "Username or phone number already exists."}), 409

        try:
            cursor.execute("INSERT INTO users (username, phone_number, pin) VALUES (?, ?, ?)",
                        (username, phone_number, pin))
            db.commit()
            return jsonify({"message": "Signup successful! Please log in."}), 201
        except sqlite3.IntegrityError:
            return jsonify({"message": "Username or phone number already exists."}), 409
    else:
        return jsonify({"message": "Unsupported Media Type. Please send JSON data."}), 415
    
# def build_cors_preflight_response():
#     response = make_response()
#     response.headers.add("Access-Control-Allow-Origin", "http://localhost:5173")
#     response.headers.add('Access-Control-Allow-Headers', "Content-Type,Authorization")
#     response.headers.add('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE,OPTIONS")
#     return response
# @app.route('/signup', methods=['OPTIONS'])
# @cross_origin()
# def handle_preflight():
#     return '', 204

@app.route('/login', methods=['GET','POST'])
@cross_origin()
def login():
    if request.is_json:  # This checks if the content-type is application/json
        data = request.json
        phone_number = data.get('phone_number')
        pin = data.get('pin')

        db = get_db()
        cursor = db.cursor()
        cursor.execute("SELECT * FROM users WHERE phone_number = ? AND pin = ?", (phone_number, pin))
        user = cursor.fetchone()

        if user:
            session['user_id'] = user[0]
            session['username'] = user[1]
            return jsonify({"message": f"Welcome, {user[1]}!"}), 200
        else:
            return jsonify({"message": "Invalid phone number or PIN."}), 401
    else:
        return jsonify({"message": "Unsupported Media Type. Please send JSON data."}), 415
    
@app.route('/add_group', methods=['POST'])
@cross_origin()
def add_group():
    if request.is_json:
        data = request.json
        group_name = data.get('group_name')
        user_id = session.get('user_id')

        db = get_db()
        cursor = db.cursor()
        cursor.execute("INSERT INTO groups (group_name, user_id) VALUES (?, ?)", (group_name, user_id))
        db.commit()
        return jsonify({"message": "Group created successfully!"}), 201
    else:
        return jsonify({"message": "Unsupported Media Type. Please send JSON data."}), 415

@app.route('/logout')
def logout():
    session.clear()
    return jsonify({"message": "You have been logged out."}), 200

# @app.route('/events')
# def get_events():
#     db = get_db()
#         cursor = db.cursor()
#         cursor.execute("INSERT INTO groups (group_name, user_id) VALUES (?, ?)", (group_name, user_id))
#         db.commit()
#         return jsonify({"message": "Group created successfully!"}), 201

if __name__ == "__main__":
    with app.app_context():
        init_db()  # Initialize the database schema
    app.run(debug=True, port=5000)  # Run the Flask application
