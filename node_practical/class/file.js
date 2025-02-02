
const fs = require('fs')

fs.writeFileSync("file path", "data in string")

// Sync
fs.writeFileSync("./test.txt","Hey Ronak how are you");
fs.writeFileSync("./catch.txt","Hey Ronak how are you");
fs.writeFileSync("./jump.txt","Hey Ronak how are you");

// Async
fs.writeFile("./hello.txt","good morning", (err) => {});
// console.log(err)


fs.cpSync("./test.txt","./hello.txt");


fs.unlinkSync("./catch.txt");