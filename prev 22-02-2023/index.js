const express = require('express')
const app = express()
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

PORT = 5001

app.get('/',(res,req)=> {
  res.send("Running")
})

const client = new MongoClient(url);
async function getData(){
  let result = await client.connect()
  let db = result.db('EmployeeDB')
  let collection = db.collection('employees').insertOne({
    name: "Prashant Rai",
    Age: 21,
    dept: "MERN"
  })
  let response  = await collection.find({}).toArray()
  console.log(response)
  console.log("MongoDB Connected Successfully")
}

getData()

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})