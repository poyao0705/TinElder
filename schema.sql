-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    phone_number TEXT NOT NULL UNIQUE,
    pin TEXT NOT NULL CHECK(length(pin) = 4)

);

-- Events table
CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_name TEXT NOT NULL,
    location TEXT NOT NULL,
    event_time TEXT NOT NULL
);
