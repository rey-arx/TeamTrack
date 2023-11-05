const fs = require('fs');
//readable stream
const http = require('http');
const server = http.createServer((req, res) =>{
    console.log('server created')
})
server.listen(3000 , 'localhost' ,()=>{
    console.log("listening");
})
const readStream = fs.createReadStream('./file.txt' , {encoding:'utf8'});
//writable stream
const writeStream = fs.createWriteStream('./file2.txt');
readStream.on('data' , (chunk)=>{
    console.log('new chunk');
    console.log(chunk);
    writeStream.write(chunk);
})

//process of piping which writes whatever it writes
readStream.pipe(writeStream);