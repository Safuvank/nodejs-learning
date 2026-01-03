// // Create simple HTTP server

// // importing the http module
// // node: http is nodejs built in module for creating webservers and handling http request
// const http = require('node:http')

// // creating the server
// const server = http.createServer((response)=>{
//     response.statusCode = 200;
//     response.setHeader('Content-Type','text/plain');
//     response.end('Hello World from Server')
// })

// server.listen(3000,'127.0.0.1',()=>{
//     console.log('Server runs at http://127.0.0.1:3000')
// })

function twoData(name, callback) {
  console.log("hei " + name);
  callback();
}

function greet() {
  console.log("it is greet function");
}

twoData("safuan", greet);

function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data Recieved"), 2000)
  );
}

async function getData() {
  console.log("Fetching...");
  const data = await fetchData();
  console.log(data);
}

getData();

function myPromise(){
    return new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task incompleted");
  }
});
}

async function runTask(){
    try{
        let result = await myPromise();
        console.log(result)
    }catch(error){
        console.log(error)
    }
}



promise
  .then((resutl) => {
    console.log(resutl);
  })
  .catch((error) => {
    console.log(error);
  });
