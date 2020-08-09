const express = require("express")
const app = express()
const { v4 } = require("uuid")


//Middleware for requests
app.use(express.json()) // Looks for a request body, and turns it into a 'req.body'


//Fake Data
const users = [
    { name: "Bob", age: 66, _id: v4() },
    { name: "Cindy", age: 34, _id: v4() },
    { name: "Ziara", age: 16, _id: v4() },
    { name: "Tyler", age: 12, _id: v4() },
    { name: "Jaylen", age: 29, _id: v4() }

]


app.get("/users", (req, res) => {
    res.send(users)

})

app.post("/users", (req, res) => {
    users.push(req.body)
    req.body._id = v4()
    res.send(`Successfully added ${req.body.name} to the database!`)
})


app.listen(9000, () => {
    console.log("This server is running on port 9000")
})