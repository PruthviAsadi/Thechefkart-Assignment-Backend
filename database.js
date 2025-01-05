const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Set database path
const dbPath = path.join(__dirname, 'database.db');

// Initialize the database
const db = new sqlite3.Database(dbPath);

// Create posts table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      caption TEXT,
      image TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
});

module.exports = db;
