
// Import a express form third party module like (NPM)
const express = require('express');

// Create a instance of express
const app = express();

const PORT = 4000;

// Let's Check the respose of the server

app.get('/',(req,res) => {
    res.sendFile( __dirname+"index.html")
    console.log(__dirname);
})

app.get('/home', (req,res) => {
    res.send(`
    <h4>Create a Express in UI Side</h4>
    <h2>Wel-come to Home Page</h2>
    
    `)
})
app.get('/about', (req,res) => {
    res.send(`
    <h4>Create a Express in UI Side</h4>
    <h2>Wel-come to About Page</h2>
    `)
})
app.get('/contact', (req,res) => {
    res.send(`
    <h4>Create a Express in UI Side</h4>
    <h2>Wel-come to Contact Page</h2>
    `)
})

app.listen(PORT, () => {
    console.log(`Server is running in localHost ${PORT}`);
});

