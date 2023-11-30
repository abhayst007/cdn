const http = require('http')

const server = http.createServer((request,response)=>{
  if (request.url==="/" && request.method==="GET"){
    const clientIP = request.connection.remoteAddress;
    response.writeHead(200,{"Content-Type":"application-json"})
    response.end(JSON.stringify({"message":"request successfull","ip":clientIP}))
}else{
  response.writeHead(400,{"Content-Type":"application-json"})
  response.end(JSON.stringify({"message":"Bad Request"}))
}

});

server.listen(2022,()=>{
  console.log("Server is listening on port 3000")
})

