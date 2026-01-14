const http =require("http");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write('<h1>SHAMSHAD AHMAD YOUR ARE CREATE THE SERVER</h1>');
    }else if(req.url=="/about"){
        res.write('<h1>I am  a student of Btech.</h1>')
    }
    res.end();
})
server.listen(5003);
console.log("the server is host on 5001");