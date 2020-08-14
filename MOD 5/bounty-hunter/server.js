const express = require("express")
const app = express()
const { v4 } = require("uuid")
const morgan = require("morgan")


app.use(express.json())
app.use(morgan("dev"))

const bounties = [
    { firstName: "Jabba", lastName: "the Hut", living: true, bountyAmount: 500000, type: "Other", _id: v4() },
    { firstName: "Dagor", lastName: "Yazzu", living: true, bountyAmount: 1250000, type: "Sith", _id: v4() },
    { firstName: "Yoda", lastName: "Fuzzball", living: true, bountyAmount: 1250000, type: "Jedi", _id: v4() },
    {
        firstName: "Doofus",
        lastName: "Ratbutt",
        living: false,
        bountyAmount: 250000,
        type: "Other",
        _id: v4()
    },
    {
        firstName: "Cali",
        lastName: "Zooboo",
        living: true,
        bountyAmount: 9570000,
        type: "Jedi",
        _id: v4()
    },
    {
        firstName: "Rocko",
        lastName: "Bandit",
        living: false,
        bountyAmount: 70000,
        type: "Other",
        _id: v4()
    }
]

app.get("/bounty", (req, res) => {
    // console.log(bounties)
    res.send(bounties)
})

app.post("/bounty", (req, res) => {
    req.body._id = v4()
    bounties.push(req.body)
    res.send(req.body)
    // res.send(`${req.body.firstName} has been added for a $${req.body.bountyAmount} bounty.`)
})

app.delete("/bounty/:deleteId", (req, res) => {
    const deleteIndex = bounties.findIndex((item) => item._id === req.params.deleteId)
    const nameDeleted = bounties[deleteIndex].firstName
    bounties.splice(deleteIndex, 1)
    res.send(req.params)
    // res.send(`You deleted ${nameDeleted} from the database.`)
})

app.put("/bounty/:updateId", (req, res) => {
    const updateIndex = bounties.findIndex(item => item._id === req.params.updateId)
    const updatedBounty = Object.assign(bounties[updateIndex], req.body)
    res.send(updatedBounty)

})

app.listen(9000, () => {
    console.log("Using port 9000")
})