const express = require('express')

// app.use(express.json())




// app.use((req, res, next) => {
//     req.body = { ...req.body, add: "by server" }
//     next()
// })



module.exports = {
    doJson: (req, res, next) => { 
        console.log("logged at " + new Date().toLocaleTimeString())
        next(); 
    },
    serverAdd: (req, res, next) => {
            // console.log(req.body)
            req.body = { ...req.body, add: "by server" }
            // console.log(req.body)
            res.send(req.body)
    }
}