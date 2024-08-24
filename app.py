from flask import Flask
import sqlite3
from flask import g
import re

DATABASE = 'database.db'
app = Flask(__name__)

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

def is_valid_pin(pin):
    return re.match(r'^\d{4}$', pin) is not None

@app.route('/check-db')
def check_db():
    print("Accessing /check-db route")
    db = get_db()
    cursor = db.cursor()

    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users';")
    users_table_exists = cursor.fetchone()

    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='events';")
    events_table_exists = cursor.fetchone()

    cursor.execute("SELECT * FROM users;")
    users_data = cursor.fetchall()

    cursor.execute("SELECT * FROM events;")
    events_data = cursor.fetchall()

    return (
        f"Users table exists: {users_table_exists is not None}<br>"
        f"Events table exists: {events_table_exists is not None}<br>"
        f"Users data: {users_data}<br>"
        f"Events data: {events_data}"
    )

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/')
def home():
    init_db()  # Ensure the database is initialized
    return check_db()  # Return the result of the check_db function

if __name__ == "__main__":
    with app.app_context():
        init_db()  # Initialize the database schema
    app.run(debug=True)  # Run the Flask application
