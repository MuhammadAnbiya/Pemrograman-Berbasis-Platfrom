const mysql = require('mysql2');

const db = mysql.createPool({
    host: '127.0.0.1', // Gunakan IPv4
    user: 'root',
    password: 'user', // Ganti dengan password root Anda
    database: 'mahasiswa_db'
});

// Cek koneksi saat aplikasi dimulai
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to database.');
    connection.release();
  }
});

module.exports = db;
