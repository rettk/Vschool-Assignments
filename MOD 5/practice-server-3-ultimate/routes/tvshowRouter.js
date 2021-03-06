const express = require("express")
const tvshowRouter = express.Router()
const { v4 } = require("uuid")


//Fake Data
const tvShows = [
    { title: "Walking Dead", releaseDate: 2015, _id: v4() },
    { title: "Unidentified", releaseDate: 2019, _id: v4() }
]


//OPTION 2 for coding get and posts 
tvshowRouter.route("/")
    .get((req, res) => {
        res.send(tvShows)
    })
    .post((req, res) => {
        req.body._id = v4()
        tvShows.push(req.body)
        res.send(`${req.body.title} has been added to the database!`)
    })

tvshowRouter.route("/:tvshowId")
    .get((req, res) => {
        const tvshowId = req.params.tvshowId
        const foundTvShow = tvShows.find(show => show._id === tvshowId)
        res.send(foundTvShow)
        //condensed!  
        // res.send(tvShows.find(show => show._id === req.params.tvshowId))
    })
    .delete((req, res) => {
        const tvshowId = req.params.tvshowId
        const tvshowIndex = tvShows.findIndex(tvshow => tvshow._id === tvshowId)
        const namedShow = tvShows[tvshowIndex].title
        console.log(namedShow)
        tvShows.splice(tvshowIndex, 1)
        res.send(`Successfully deleted ${namedShow}!`)
    })
    .put((req, res) => {
        const tvshowId = req.params.tvshowId
        const tvshowIndex = tvShows.findIndex(tvshow => tvshow._id === tvshowId)
        const updatedShow = Object.assign(tvShows[tvshowIndex], req.body)
        res.send(`New data posted: ${tvShows[tvshowIndex].title}`)
    })


module.exports = tvshowRouter