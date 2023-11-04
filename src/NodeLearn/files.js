const fs = require('fs');

//this is asynchronous so hey is printed first
//reading file
fs.readFile('./file.txt' , (err , data) =>{
    if(err){
        console.log(err)
    }
    console.log(data.toString());
});
console.log("hey");
//writing files
fs.writeFile('./file.txt','hello' , (err) = {
    console.log('File has been written');
} )
//diirectories 
fs.writeFile('./file1.txt','hello' , (err) = {
    console.log('File has been created and written');
} )
//deleting files

