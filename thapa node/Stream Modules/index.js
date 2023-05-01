import http from "http"
import fs from 'fs'

const server = http.createServer();

// 3rd method of real time streaming of data using .pipe methodx    
server.on("request", (req,res) => {
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res)

 
})




const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Connected to Server on PORT http://localhost:${PORT}`)
})