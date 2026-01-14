const path=require("path");
// console.log(path.sep);
// console.log(process.env.path)
// console.log(path.delimiter)
// const currentPathname=__filename;
// console.log(currentPathname);
// console.log(__dirname)
// console.log(path.basename(__filename))
// console.log(path.basename(__filename,'.js'))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))
// console.log(path.extname("index.n.js"))
// console.log(path.parse(__filename));


// This is other module
  
const fs= require("fs");
console.log("start");
// fs.readFile("index.txt",function(err,data){
//     if(err){
//         console.log("err");
//         return err;
//     }
//     console.log(data.toString());
//     return data;
// })
// console.log("syn");
// const data=fs.readFileSync("index.txt");
// console.log('DATA:',data.toString());
// console.log("end");
// const buf=new Buffer(1024);
// fs.open("index.txt",'r+',function(err,fd){
//     if(err){
//         console.log("error",err);
//         return err;
//     }
//     console.log("file open successfully!");
//     fs.read(fd,buf,0,buf.length,0,function(er,bytes){
//         console.log(buf.slice(0,bytes).toString());
//     })
// })


// fs.writeFile('index.txt',"Replace data",function(err){
//       if (err){
//         console.log("error");
//          return err;
//       }
//       console.log("Write sucessfully");
// })

// fs.writeFileSync("index.txt","shamshad ahmad second replace word"); 

// fs.appendFile("index.txt",'other append text','utf8',function(err){
//     if(err){
//         console.log("err");
//         return err;
//     }
//     console.log("successfully!");
// })
fs.unlink("index.txt",function(err){
    if(err){
        console.log("error");
    }
    console.log("delete successfully");
})