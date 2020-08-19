const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")

const rateLimit = require("express-rate-limit")

app.use(express.json())
app.use(morgan("dev"))

// Rate limiting - Goodreads limits to 1/sec, so we should too

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);

const limiter = rateLimit({
    windowMs: 1000, // 1 second
    max: 1, // limit each IP to 1 requests per windowMs
})

//  apply to all requests
app.use(limiter)

// Routes

// Test route, visit localhost:3000 to confirm it's working
// should show 'Hello World!' in the browser
app.get("/", (req, res) => res.send("Hello World!"));






app.listen(9000, () => {
    console.log("server running on port 9000")
})