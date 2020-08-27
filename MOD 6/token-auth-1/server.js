const express = require('express')
const app = express()
require("dotenv").config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')  //puts a .user on all req.body.user

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  'mongodb://localhost:27017/user-authentication',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to the DB')
)

app.use("/auth", require("./routes/authRouter.js"))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))  // has a req.user so we know the user authenticated
app.use('/api/todo', require('./routes/todoRouter.js'))

//error handling middleware
app.use((err, req, res, next) => {
  console.log(err)
  if (err.name === "UnauthorizedError") {
    res.status(err.status)
  }
  return res.send({ errMsg: err.message })
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})