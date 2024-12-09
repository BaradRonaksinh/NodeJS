let http = require('http'); // create a http request


// create a server with argument --> (req,res)  
http.createServer((req,res) => {  
    res.write("My First Node Server.....    Hello World");
    res.end("close..");
    // And End with listen task bcz that will provide port no points 
}).listen(8080,()=> {
    console.log("server run in 8080 port ")
})