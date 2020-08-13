const express = require("express")
const app = express()
const { v4 } = require("uuid")
const { doJson, serverAdd } = require("./middleware")


// app.use(express.json())

// app.use((req, res, next) => {
//     req.body = {...req.body, add: "by server" }
//     next()
// })

app.use(express.json())
app.use(doJson)



const stuff = [
    {
        number: 1,
        name: "goose",
        picture: true
    },
    {
        number: 2,
        name: "chicken",
        picture: false
    }
]

app.get("/", (req, res, next) => {
    res.send(stuff)
    //console.log(req)
})

app.post('/', (req, res, next) => {
    console.log(req.body)
    req.body._id = v4()
    next()
})

app.use(serverAdd)

app.listen(9000, () => {
    console.log("Server running on port 9000")
})


