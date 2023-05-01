import http from "http"
import fs from 'fs'

const server = http.createServer();

// 2nd method of real time streaming of data
server.on("request", (req,res) => {
    const rstream = fs.createReadStream("input.txt");

    rstream.on("data", (chunkdata) => {
        console.log(chunkdata);
        res.write(chunkdata);
    })
    rstream.on("end", () => {
        res.end()
    })
    rstream.on("error", (err) => {
        console.log(err)
        res.end("File not Found")
    })
 
})




const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Connected to Server on PORT http://localhost:${PORT}`)
})