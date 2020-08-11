const express = require("express")
const app = express()
const { v4 } = require("uuid")
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

const todoList = [
    {
        name: "the name",
        description: "description of what the item is",
        imageUrl: "http of an image",
        completed: false,
        _id: v4()
    }
]


app.get("/", (req, res) => {
    res.send(todoList)
})

app.get("/:Id", (req, res) => {
    const selectedTodo = todoList.find(item => item._id === req.params.Id)
    res.send(selectedTodo)
})

app.post("/", (req, res) => {
    req.body._id = v4()
    todoList.push(req.body)
    res.send(`${req.body.name} has been added to the list!`)

})

app.put("/:updateId", (req, res) => {
    const itemIndex = todoList.findIndex(item => item._id === req.params.updateId)
    Object.assign(todoList[itemIndex], req.body)
    res.send(todoList[itemIndex])
})

app.delete("/:deleteId", (req, res) => {
    const deleteIndex = todoList.findIndex((item) => item._id === req.params.deleteId)
    const deletedItem = todoList[deleteIndex].name
    todoList.splice(deleteIndex, 1)
    res.send(`${deletedItem} has been deleted!`)
})

app.listen(9000, (req, res) => {
    console.log("Server is running on port 9000")
})