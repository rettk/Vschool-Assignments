const express = require("express")
const app = express()



//Middleware
app.use(express.json()) // looks for a requst and makes it req.body
app.use("/movies", require("./routes/movieRouter"))
app.use("/tvshows", require("./routes/tvshowRouter"))






app.listen(9000, () => {
    console.log("Server running on port 9000")
})