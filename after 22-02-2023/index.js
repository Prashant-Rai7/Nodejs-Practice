var express = require("express");
var app = express();
// var request  = require("request")

// request("https://www.google.com", (error,response,body) => {
//     console.log(response);
// })

app.set('view engine','jade');
app.get("/", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.send('Hello World!');
//   res.render("index", { title: "Guru99", message: "Welcome" });

  res.end("Hello World");
});

let PORT = 7000;
app.listen(PORT, () => {
  console.log(`Connected Successfully on PORT ${PORT}`);
});
