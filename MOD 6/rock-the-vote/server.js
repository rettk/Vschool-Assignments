const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")
require("dotenv").config()

// Dummy Test Data

const issueData = {
    abortionRights: {

    }
}


// Middleware
app.use(express.json())  // looks for request and makes it req.body
app.use(morgan("dev"))  // logs requests to the console


// Connect to MongoDB Middleware

mongoose.connect("mongodb://localhost:27017/issuesDB",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to mongo database")
)

// Routes
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))



// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

// Listener
app.listen(9000, () => {
    console.log("server running on port 9000")
})