const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswaController');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Route untuk root
app.get('/', (req, res) => {
    res.send('Welcome to the Mahasiswa API');
});

// Endpoint untuk mahasiswa
app.use('/mahasiswa', mahasiswaController);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
