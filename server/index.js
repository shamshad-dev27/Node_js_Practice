const http=require('http');
const { join } = require('path');
const port=3032;
const hostname="localhost"
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.statusCode=200;
    res.setHeader('Content-Type','text-plain');
    res.end('Welcome to node js server');
    } 
    else if(req.url=='/about'){
         res.statusCode=200;
    res.setHeader('Content-Type','text-plain');
    res.end('About!');
    }else if(req.url=='/contact'){
        res.statusCode=200;
    res.setHeader('Content-Type','text-plain');
    res.end('contace!'); 
    }else if(req.url=='/product'){
        const option={
            hostname:'fakestoreapi.com',
            path:'/products/1',
            method: 'GET'
        }
        
        const reqApi=http.request(option,(resApi)=>{
              resApi.on("data",(data)=>{
                 res.statusCode=200;
               res.setHeader('Content-Type','Application/json');
               res.end((data.toString()));
              })
        })
        
        
        reqApi.on("error",()=>{
            console.log(e);
        })
        reqApi.end();
        
    }else{
         res.statusCode=500;
    res.setHeader('Content-Type','text-plain');
    res.end('ERROR!');
    }
})

server.listen(port,()=>{
    console.log(`created server${port}:${hostname}`);
})