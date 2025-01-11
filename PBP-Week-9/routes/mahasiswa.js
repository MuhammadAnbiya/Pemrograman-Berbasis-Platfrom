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

// GET: Retrieve a student by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM mahasiswa WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err.message);
    if (results.length === 0) return res.status(404).send('Mahasiswa tidak ditemukan.');
    res.json(results[0]);
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
      res.status(201).send('Mahasiswa berhasil ditambahkan.');
    }
  );
});

// PUT: Update a student by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nama, nim, jurusan, angkatan } = req.body;

  if (!nama || !nim) return res.status(400).send('Nama dan NIM diperlukan.');

  db.query(
    'UPDATE mahasiswa SET nama = ?, nim = ?, jurusan = ?, angkatan = ? WHERE id = ?',
    [nama, nim, jurusan, angkatan, id],
    (err, result) => {
      if (err) return res.status(500).send(err.message);
      if (result.affectedRows === 0) return res.status(404).send('Mahasiswa tidak ditemukan.');
      res.send('Data mahasiswa berhasil diperbarui.');
    }
  );
});

// DELETE: Delete a student by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  db.query('DELETE FROM mahasiswa WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err.message);
    if (result.affectedRows === 0) return res.status(404).send('Mahasiswa tidak ditemukan.');
    res.send('Mahasiswa berhasil dihapus.');
  });
});

module.exports = router;
