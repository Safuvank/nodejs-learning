const http = require('http')

const server = http.createServer((request,response)=>{
    Response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    response.end('Hello World')
})

server.listen(3000,()=>{
    console.log('Server running at http://localhost:3000')
})