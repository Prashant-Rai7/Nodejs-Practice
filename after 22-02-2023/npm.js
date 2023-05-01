var express = require("express");
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myProject';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
}

var app = express();

app.route('/home').get((req, res) => {
  res.end("Hello World");
});

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
  }

let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Connected Successfully on PORT ${PORT}`);
});
