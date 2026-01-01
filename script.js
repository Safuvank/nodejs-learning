// Create simple HTTP server 

// importing the http module
// node: http is nodejs built in module for creating webservers and handling http request 
const http = require('node:http')

// creating the server
const server = http.createServer((response,request)=>{
    response.statusCode = 200;
    response.setHeader = ('Content-text','text/plain');
    response.end('Hello World from Server')
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('Server runs at http://127.0.0.1:3000')
})

