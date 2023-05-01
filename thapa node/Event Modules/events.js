const EventEmitter = require('events')

const event = new EventEmitter()

event.on("sanjay", () => {
    console.log("Your name is sanjay")
})
// event.on("saymyname", () => {
//     console.log("Your name is Vinod Thapa")
// })
// event.on("saymyname", () => {
//     console.log("Your name is Vinod Thapa")
// })

event.emit("sanjay")

// event.on("checkpage", (sc, msg) => {
//     console.log(`page is redirected status code is ${sc} and msg is ${msg}`)
// })
// event.emit("checkpage", 400, "OK")
