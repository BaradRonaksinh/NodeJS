let http = require('http');

http.createServer((req,res) => {
    res.write("My First Node Server.....   ");
    res.end("close..");
}).listen(4500)