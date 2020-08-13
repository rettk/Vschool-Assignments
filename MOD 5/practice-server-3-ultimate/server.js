const express = require("express")
const app = express()
const morgan = require("morgan")



//Middleware
app.use(express.json()) // looks for a requst and makes it req.body
app.use(morgan("dev"))  // logs requests to the console

app.use("/movies", require("./routes/movieRouter"))
app.use("/tvshows", require("./routes/tvshowRouter"))






app.listen(9000, () => {
    console.log("Server running on port 9000")
})