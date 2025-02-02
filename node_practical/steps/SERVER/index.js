const http = require('http');

const myServer = http.createServer((req, res) => {
    
    console.log("New Request Recive");
    console.log(req.headers);
    res.end("Hello from SERVER Side")
});

const PORT = 9000;

myServer.listen(PORT, () => console.log("Server Started!"))