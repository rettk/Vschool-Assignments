const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")



//Middleware
app.use(express.json()) // looks for a requst and makes it req.body
app.use(morgan("dev"))  // logs requests to the console

//Connect to database
mongoose.connect("mongodb://localhost:27017/moviesdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the mongo database")
)

//Routes
app.use("/movies", require("./routes/movieRouter"))
app.use("/tvshows", require("./routes/tvshowRouter"))





app.listen(9000, () => {
    console.log("Server running on port 9000")
})
