const express = require('express');
const db = require('../db/connection');
const router = express.Router();

// GET: Retrieve all students
router.get('/', (req, res) => {
db.query('SELECT * FROM mahasiswa', (err, results) => {
if (err) return res.status(500).send(err.message);
res.json(results);

});
});

// POST: Add a new student
router.post('/', (req, res) => {
const { nama, nim, jurusan, angkatan } = req.body;
if (!nama || !nim) return res.status(400).send('Nama dan NIM diperlukan.');
db.query('INSERT INTO mahasiswa (nama, nim, jurusan, angkatan) VALUES (?, ?, ?, ?)',

[nama, nim, jurusan, angkatan],
(err, result) => {
if (err) return res.status(500).send(err.message);
res.send('Mahasiswa berhasil ditambahkan.');
}
);
});

module.exports = router;