const express = require("express")
const { v4 } = require("uuid")
const app = express()
// router = express.Router()

app.use(express.json())

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: v4()
    }, {
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: v4()
    }, {
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: v4()
    }, {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: v4()
    }, {
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: v4()
    }, {
        name: "soup",
        type: "food",
        price: 300,
        _id: v4()
    }, {
        name: "flour",
        type: "food",
        price: 100,
        _id: v4()
    }, {
        name: "banana",
        type: "clothing",
        price: 1400,
        _id: v4()
    }
]

// app.get("/food", (req, res) => {
//     console.log(req)
//     const typesReturned = inventoryItems.filter(item => item.type === "food")
//     res.send(typesReturned)
// })

app.get("/", (req, res) => {
    res.send(inventoryItems)
})

app.get("/:type", (req, res) => {
    const typesReturned = inventoryItems.filter(item => req.params.type === item.type)
    res.send(typesReturned)
})

app.get("/name", (req, res) => {
    console.log(req)
    name = req.query.name
    typesReturned = inventoryItems.filter(item => item.name === name)
    res.send(typesReturned)
})



app.listen(9000, () => {
    console.log("Server is running on port 9000")
})

