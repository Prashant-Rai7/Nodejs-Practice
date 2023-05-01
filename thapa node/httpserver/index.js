import http from 'http'
const server =  http.createServer((req,res)=>{
    // res.write("Hello from Http Server !!")
    // console.log(req.url)
    // if (req.url == "/"){
    //     res.end("Hello from Home Page")
    // }else if(req.url == "/whatsapp"){
    //     res.end("Welcome to Whatsapp web")
    // }else{
    //     res.end("Page Not Found 404 Error")
    // }
    // res.writeHead(200, {"content-type": "application/json"})
    // res.JSON({"Name": "Prashnat Rai", "Age": "21"})
    res.writeHead(404, {"content-type": "text/html"})
    res.end("<h1>Page Not Found 404</h1>")
})

const PORT = 4000
server.listen(4000, () => {
    console.log(`Server Connected on port ${PORT}`)
})