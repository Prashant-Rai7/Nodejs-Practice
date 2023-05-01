
// console.log(__filename)
// console.log(__dirname)

// (function (exports, require, module, __dirname, __filename){
//     const a = require('fs')
//     const name = "Vinod"
//     console.log(name)
//     module.exports = {dfjksjafhdh}
// })()



// bonus knowledge...
// IIFE - Immediately Invoked Function Expression

( function () {
    const name = "Vinod Bhadur Thapa"
    console.log(name)
})()

// this data is private inside the function because of the IIFE , we cannot print/ console the name outside the function and will automatically Call the function directly.