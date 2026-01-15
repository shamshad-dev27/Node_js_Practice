const http=require('http');

const option={
    hostname:'fakestoreapi.com',
    path:'/products/1',
    method: 'GET'
}

const reqApi=http.request(option,(resApi)=>{
      resApi.on("data",(data)=>{
        console.log(data.toString())
      })
})


reqApi.on("error",()=>{
    console.log(e);
})
reqApi.end();