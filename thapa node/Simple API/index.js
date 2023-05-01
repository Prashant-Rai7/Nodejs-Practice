import http from "http"
import fs from 'fs'

const server = http.createServer((req,res) => {

    if (req.url == "/jsondata"){
        fs.readFile("response.json", "utf-8", (err, data) => {
            const objData = JSON.parse(data)
            // console.log(objData.title)
            // res.write(objData.title)
            res.end(data)
        })
    }

})
const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Connected to Server on PORT http://localhost:${PORT}/jsondata`)
})