const express = require('express'); // import express

const app = express();  //use an express module

//define route

// app.get('/', func)
app.get('/', (req,res) => {
    res.send("Welcome in  express  /\ ")
})

// start the server

// app.listen(PORT,fuunc)

let PORT = 4000

app.listen(PORT,() => {
    console.log(`Server running in ${PORT} PORT`);
})
