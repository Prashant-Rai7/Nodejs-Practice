import express from 'express'
import sendMail from './sendmail.js'
import gmail from './gmail.js'

const app  = express()
const PORT = 8080;

app.get("/", (req,res) => {
    res.send("Hello, World")
})

app.get("/mail", sendMail);
app.get("/gmail", gmail);


app.listen(PORT, () => {
    console.log(`Connected on http://localhost:${PORT}`)
})
