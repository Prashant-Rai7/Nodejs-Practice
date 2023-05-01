var express = require("express");
// var MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

var  url = 'mongodb://localhost:27017/EmployeeDB';


MongoClient.connect(url, function(err, db) {
    console.log("Connected")
    db.close();
});

var app = express();

app.route('/home').get((req, res) => {
  res.end("Hello World");
});


let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Connected Successfully on PORT ${PORT}`);
});