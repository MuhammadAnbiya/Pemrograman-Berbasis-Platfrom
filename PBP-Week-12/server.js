const express = require("express");
const { body, validationResult } = require("express-validator");
const Joi = require("joi");
const app = express();
const port = 3000;

app.use(express.json());

// Middleware untuk validasi input route menggunakan express-validator
const validateInput = [
  body("username")
    .isLength({ min: 5 })
    .withMessage("Panjang username minimal 5 karakter"),
  body("email").isEmail().withMessage("Format email tidak valid"),
  // Tambahkan validasi lain sesuai kebutuhan
];

// Middleware untuk validasi input route menggunakan Joi
const validateInputJoi = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    // Tambahkan validasi lain sesuai kebutuhan
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

// Contoh route dengan validasi menggunakan express-validator
app.post("/user", validateInput, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  // Pemrosesan data user
  res.json({ message: "Data berhasil divalidasi dan diproses" });
});

// Contoh route dengan validasi menggunakan Joi
app.post("/user-joi", validateInputJoi, (req, res) => {
  // Jika middleware validateInputJoi lulus, berarti valid
  res.json({ message: "Data berhasil divalidasi dan diproses" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
