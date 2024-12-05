let http = require('http');

http.createServer((req,res) => {
    res.write("My First Node Server.....    Hello World");
    res.end("close..");
}).listen(8080)