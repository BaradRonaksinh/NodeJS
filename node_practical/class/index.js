let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => { //create a read file-system
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(data);
        if(err) {

            err = "error aa gya bhai"
            console.log(err);
        }
        return res.end(console.log("end the server -----"));
    })

    fs.open('check.html','w', (err,file)=>{
        if(err) throw err;
        console.log("file saved");
    })
}).listen(5000);