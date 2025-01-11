const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaRoute = require('./routes/mahasiswa');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Menambahkan route mahasiswa
app.use('/mahasiswa', mahasiswaRoute);

// Menangani error global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
