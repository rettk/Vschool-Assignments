const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const axios = require("axios")

// const rateLimit = require("express-rate-limit")

app.use(express.json())
app.use(morgan("dev"))

// console.log(process.env.API_KEY)



//DATA API 2 that has 100 requests/day

let stuff2 = {}

function getData2(birthDate) {
    var config2 = {
        method: 'post',
        url: `https://astrology-horoscope.p.rapidapi.com/zodiac_astrology/result?mystic_dob=${birthDate}&mystic_name=bob`,
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY
        }
    }

    axios(config2)
        .then(function (response) {
            stuff2 = response.data.data
            console.log(stuff2)
            // setSignData2(stuff2)
            // setSign(stuff2["Your Sun Sign"]["Sun Sign"])
            return response.data.data
        })
        .catch(function (error) {
            console.log(error);
        });

}

app.get("/birth/:date", (req, res, next) => {
    const date = req.params.date
    getData2(date)
    return res.status(200).send(stuff2)
})

console.log(stuff2)

//DATA API 1
let stuff = {}

function getData(sign) {
    axios.post(`https://aztro.sameerkumar.website?sign=${sign}&day=today`)
        .then(response => {
            stuff = response.data
            console.log(stuff)
            return response.data
        })
}

app.get("/:sign", (req, res, next) => {
    const sign = req.params.sign
    console.log(sign)
    getData(sign)
    console.log(stuff)
    return res.status(200).send(stuff)

})

//server listen
app.listen(9000, () => {
    console.log("server running on port 9000")
})


//multiple axios requests???

// import axios from 'axios';

// let one = "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"
// let two = "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt"
// let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"

// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);
// const requestThree = axios.get(three);

// axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
//   const responseOne = responses[0]
//   const responseTwo = responses[1]
//   const responesThree = responses[2]
//   // use/access the results 
// })).catch(errors => {
//   // react on errors.
// })




//delete????
// Rate limiting - Goodreads limits to 1/sec, so we should too

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

// const limiter = rateLimit({
//     windowMs: 1000, // 1 second
//     max: 1, // limit each IP to 1 requests per windowMs
// })

//  apply to all requests
// app.use(limiter)

// Routes

// Test route, visit localhost:3000 to confirm it's working
// should show 'Hello World!' in the browser
// app.get("/", (req, res) => res.send("Hello World!"));