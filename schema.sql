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

-- Insert sample data into users table
INSERT INTO users (username, phone_number, pin) VALUES
('alice', '123-456-7890', '1234'),
('bob', '234-567-8901', '5678');

-- Insert sample data into events table
INSERT INTO events (event_name, location, event_time) VALUES
('Conference', 'Room 101', '2024-08-25 10:00:00'),
('Workshop', 'Room 202', '2024-08-26 14:00:00');
