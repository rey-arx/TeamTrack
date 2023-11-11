//reading html file
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {

    console.log(req.url);//show which url it is requesting
    console.log(req.method); //show which method

    let path = './htmlstore/';
    if(req.url == '/'){
        path+='index.html';
    }
    else if(req.url  == '/about')
    {
        path+='about.html';
    }
    else if(req.url == '/about-me'){
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end();
    }
    else{
        path+='404.html';
    }
    res.setHeader('Content-Type','text/html');
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
    
    

}); 

server.listen(8080, 'localhost' , ()=>{
    //this call back func is for when we are listening
    console.log('listening');
});
