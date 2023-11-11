const http = require('http');
//this call back function runs whenever a req comes to our server
//two arg : request and response
//res contains the where it comes , what it wants
const server = http.createServer((req,res) => {
    // console.log(req);
    console.log(req.url);//show which url it is requesting
    console.log(req.method); //show which method
    //set header content type: (text type);
    // res.setHeader('Content-Type' , 'text/plain');
    // res.write('hello');
    //if we need to send html
    res.setHeader('Content-Type','text/html');
    res.write('<p>hi</p>');
    res.write('</br>');
    res.write('<p>helo</p>');
    
    res.end();

}); 
//we have a port and a host name
//port number are like a door into computer where diff port num for diff application

server.listen(8080, 'localhost' , ()=>{
    //this call back func is for when we are listening
    console.log('listening');
});
