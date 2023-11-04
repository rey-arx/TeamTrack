const fs = require('fs');
//readable stream
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