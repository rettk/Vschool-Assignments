const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/crud-store",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("connected to the mongo database")
)

//Routes
app.use("/inventory", require("./routes/inventoryRouter"))



app.listen(9000, () => {
    console.log("server running on port 9000")
})