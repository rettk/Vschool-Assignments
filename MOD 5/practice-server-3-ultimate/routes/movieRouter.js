const express = require("express")
const movieRouter = express.Router()
// const { v4 } = require("uuid")
const Movie = require("../models/movie.js")

//Fake Data
// const movies = [
//     { title: "Terminator", releaseDate: 1992, genre: "action", _id: v4() },
//     { title: "Crouching Tiger Hidden Dragon", genre: "action", releaseDate: 2003, _id: v4() },
//     { title: "X-Men 4", releaseDate: 2018, genre: "action", _id: v4() },
//     { title: "Mulan", releaseDate: 2018, genre: "kids", _id: v4() }
// ]

//OPTION 1 for coding get and posts --- (option 2 is in tvshowRouter.js)

//get all
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

//get one
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movieId === movie._id)
    res.send(foundMovie)
})

//get query filter
movieRouter.get("/search/genre", (req, res) => {
    Movie.find({ genre: req.query.genre }, (err, movies) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)

    })

    // old code
    // console.log(req)
    // const genre = req.query.genre
    // filteredMovies = movies.filter(movie => movie.genre === genre)
    // res.send(filteredMovies)

})

// post one object
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })

    //old code
    // req.body._id = v4()
    // movies.push(req.body)
    // res.send(req.body)
    // res.send(`${req.body.title} has been added to the database`)
})

// delete one
movieRouter.delete("/:movieId", (req, res) => {
    Movie.findOneAndDelete({ _id: req.params.movieId }, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.title}`)
    })
})

// old method
// const movieId = req.params.movieId
// const movieIndex = movies.findIndex(movie => movie._id === movieId)
// const namedMovie = movies[movieIndex].title
// console.log(namedMovie)
// movies.splice(movieIndex, 1)
// res.send(`Successfully deleted ${namedMovie}!`)
// })


// put and update one

movieRouter.put("/:movieId", (req, res) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId },   //find this one to update
        req.body,    //update the object with this data
        { new: true },   //send back the updated version, not the old version
        (err, updatedMovie) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )


    // old method
    // const movieId = req.params.movieId
    // const movieIndex = movies.findIndex(movie => movieId === movie._id)
    // const updatedMovie = Object.assign(movies[movieIndex], req.body)
    // res.send(req.body)
    // res.send(`New data posted: ${movies[movieIndex].title}`)
})

module.exports = movieRouter