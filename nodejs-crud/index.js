const express = require('express');

const bodyParser = require('body-parser');
const mahasiswaRoute = require('./routes/mahasiswa');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/mahasiswa', mahasiswaRoute);

app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});