import http from "http"
import fs from 'fs'

const server = http.createServer();

// normal method not Streaming
server.on("request", (req,res) => {
    fs.readFile("input.txt", "utf-8", (err, data) => {
        if (err) return console.error(err);
        res.end(data.toString())
    })
})




const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Connected to Server on PORT http://localhost:${PORT}`)
})