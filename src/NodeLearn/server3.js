const http = require('http');
//this call back function runs whenever a req comes to our server
//two arg : request and response
//res contains the where it comes , what it wants
const server = http.createServer((req,res) => {
    console.log("req made");
}); 
//we have a port and a host name
//port number are like a door into computer where diff port num for diff application

server.listen(8080, 'localhost' , ()=>{
    //this call back func is for when we are listening
    console.log('listening');
});
