from flask import Flask

import sqlite3
from flask import g

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
    """Check if the PIN is exactly 4 digits long."""
    return re.match(r'^\d{4}$', pin) is not None


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/')
def home():
    cur = get_db().cursor()
    
    return "Hello, Flask!"

if __name__ == "__main__":
    app.run(debug=True)
