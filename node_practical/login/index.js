const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 7000;

//mongoose connection
mongoose.connect('mongodb://localhost:27017/login') //databse Url
.then(() => console.log("Db Connected")) //success
.catch((err) => console.log("DB error ",err)); //error

// middleware to parse the request body
// app.use(bodyParser.json());

// create a Schema

const loginSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// create a model
const login = mongoose.model('login', loginSchema);



// Hardcore credentials
const username = "Ronak";
const passWord = "112233"


// login route
app.post('/login', (req,res) => {
    const { userName, passWord} = req.body; // destrucring the req body
    console.log(req.body);
    if(username === userName && password === passWord){
        res.status(200).json({message:"Login Success", status:"Success"});
    }
    else{
        res.status(401).json({message:"Login Faild", status:"Faild"});
    }
});


// start the Server
app.listen(PORT, () => console.log(`Server is Runiing in ${PORT}`));



