var http = require('http');
var fs = require('fs');
http.createServer( (req, res)  => {
  
    // const data = fs.writeFile("apple.txt","sanjay is genius! and very smart", (err) => {
    // })
    // const data = fs.appendFile("apple.txt", "This is a new avatar of Sanjay parmar whose gonna be Node Js king and developer of all the it", (err)=> {
    // })
    // console.log("Added succesfully")
    // res.end(data)
    const data = fs.readFile("apple.txt", "utf-8", (err, data)=> {
        console.log(data)
        res.end(data)
    })

}).listen(8080, ()=> {
    console.log(`http://localhost:8080`)
});