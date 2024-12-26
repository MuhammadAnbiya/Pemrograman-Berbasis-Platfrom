const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',  // Ganti dengan 127.0.0.1 jika menggunakan localhost atau ::1
    user: 'root',
    password: 'user',
    database: 'mahasiswa',
});


connection.connect((err) => { // Ubah dari "erг" ke "err"
    if (err) {
        console.error('Error connecting to MySQL database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = connection;
