const http = require('http')
const PORT = 5001
const server = http.createServer((request,response) => {
    response.writeHead(200, {"content-Type": "text/plain"});
    response.end("Hellow World")
})

// server.listen(5001)
server.listen(PORT, ()=> {
    console.log(`Connected Successfully :${PORT} and http://localhost:5001`)
})



// const request = require('request')
// request("https://www.google.com", (response,error,body)=> {
//     console.log(body)
// })
// request.listen(5001)



// const express = require('express')
// const app = express()
// const PORT = 5001
// app.get('/', (req,res) => {
//     res.send("Hello Eworld")
// })
// routing
// app.route('/hello').get((req,res) => {
//     res.send("Hello MR. Prashant")
// })


// app.listen(PORT, () => {
//     console.log(`Connected on PORT : ${PORT}`)
// })




// const express = require('express')
// const PORT = 5001
// // const MongoClient  = require('mongodb').MongoClient;
// const { MongoClient } = require('mongodb');
// var url = 'mongodb://localhost:27017';
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


// const app = express()


// app.get('/', (req,res) => {
//     res.send("Server is Running on localhost")
// })


// function main(){
// console.log("fxn")
  // client.connect((err) => {

  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log("Mongo Connected ");
  //   });
// }



// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db("schooldb");
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }



// MongoClient.connect(url, function(err, db){
//     console.log("MongoDB Connected")
//     db.close()
// })
// main()
// app.listen(PORT,  () => {
//     console.log(`Connected on PORT : ${PORT}`)
// })







// const http = require('http')
// const PORT = 5001
// const server = http.createServer((req,res) => {
//     if (req.url == '/'){
//         res.end(" Hello World")
//     }
//     else if (req.url =='/about'){

//         res.end("Hello World from Node.js Server")
//     }
//     else{
//         res.end("eoo")
//     }
// })

// server.listen(PORT, ()=> {
//     console.log(`Server Connected Successfully on PORT :${PORT} and http://localhost:5001`)
// })
