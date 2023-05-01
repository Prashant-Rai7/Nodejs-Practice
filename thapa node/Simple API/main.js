import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  fs.readFileSync("response.json", "utf-8")
    //   console.log(data);
    const objData = JSON.parse(data)

  if (req.url == "/userapi") {
    res.write("Hello from Http userapi Server !!");
    // res.end(objData.title)
    res.end(JSON.stringify(objData));
    
  }

  
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server Connected on port ${PORT}`);
});
