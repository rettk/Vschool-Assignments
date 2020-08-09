const express = require("express")
const app = express()
const { v4 } = require("uuid")

app.use(express.json())

const bounties = [
    { firstName: "Jabba", lastName: "the Hut", living: true, bountyAmount: 500000, type: "Other", _id: v4() },
    { firstName: "Dagor", lastName: "Yazzu", living: true, bountyAmount: 1250000, type: "Sith", _id: v4() },
    { firstName: "Yoda", lastName: "Fuzzball", living: true, bountyAmount: 1250000, type: "Jedi", _id: v4() }
]

app.get("/", (req, res) => {
    res.send(bounties)
})

app.post("/", (req, res) => {
    req.body._id = v4()
    bounties.push(req.body)
    res.send(`${req.body.firstName} has been added for a $${req.body.bountyAmount} bounty.`)
})

app.listen(9000, () => {
    console.log("Using port 9000")
})