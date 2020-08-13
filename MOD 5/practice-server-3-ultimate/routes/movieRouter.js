const express = require("express")
const movieRouter = express.Router()
const { v4 } = require("uuid")

//Fake Data
const movies = [
    { title: "Terminator", releaseDate: 1992, genre: "action", _id: v4() },
    { title: "Crouching Tiger Hidden Dragon", genre: "action", releaseDate: 2003, _id: v4() },
    { title: "X-Men 4", releaseDate: 2018, genre: "action", _id: v4() },
    { title: "Mulan", releaseDate: 2018, genre: "kids", _id: v4() }
]

//OPTION 1 for coding get and posts --- (option 2 is in tvshowRouter.js)

//get all
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

//get one
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movieId === movie._id)
    res.send(foundMovie)
})

//get query filter
movieRouter.get("/search/genre", (req, res) => {
    console.log(req)
    const genre = req.query.genre
    filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)

})

// post object
movieRouter.post("/", (req, res) => {
    req.body._id = v4()
    movies.push(req.body)
    res.send(req.body)
    // res.send(`${req.body.title} has been added to the database`)
})

// delete one
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const namedMovie = movies[movieIndex].title
    console.log(namedMovie)
    movies.splice(movieIndex, 1)
    res.send(`Successfully deleted ${namedMovie}!`)
})

// put and update one

movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movieId === movie._id)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(req.body)
    // res.send(`New data posted: ${movies[movieIndex].title}`)
})

module.exports = movieRouter