var express = require("express");
var mongoClient = require('mongodb').MongoClient;

var  url = 'mongodb://localhost/EmployeeDB';


var app = express();

app.route('/home').get((req, res) => {
  res.end("Hello World");
});

mongoClient.connect(url, function(err, db) {

    // var cursor = db.collection('Employee').find();

    // cursor.each(function(err, doc) {

    //     console.log(doc);

    // });
    console.log("Connected")
    db.close();
});

let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Connected Successfully on PORT ${PORT}`);
});
