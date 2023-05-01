const http = require('http');
require('dotenv').config();
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;

  res.write("Hellow to DOM")
  });
  
  server.listen(port, () => {
    console.log(`Server Connected on port ${port}`)
  });



// import express from 'express';
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Successfully Running on port ${port}`)
// })
