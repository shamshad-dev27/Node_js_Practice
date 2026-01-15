const http=require('http');
const port=3021;
const hostname="localhost"
const server=http.createServer((req,res)=>{
    res.statusCode=500;
    res.setHeader('Content-Type','Application/json');
    res.end(JSON.stringify({ error : 'server-error'}))
})

server.listen(port,()=>{
    console.log(`created server${port}:${hostname}`);
})