const express = require('express')
const {body, validationResult} = require('express-validator')

const app = express()
const port = 8080
app.use(express.json())

//validator untuk validasi input menggunakan express validator
const ValidateInput = [
    body('username').isLength({min:5}).withMessage("Minimal 5 Karakter"),
    body('email').isEmail().withMessage("Format tidak sesuai")
]

//route user
app.post('/user', ValidateInput , (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()[0].msg})
    }
    res.json({message: 'Data User Valid'})

})

app.listen(port, ()  =>{
    console.log("Server Berjalan")
})
