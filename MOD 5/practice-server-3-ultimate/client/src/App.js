import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import Movie from "./components/Movie"
import AddMovieForm from "./components/AddMovieForm"
import { get } from "mongoose"

function App() {
    const [movies, setMovies] = useState([])

    useEffect(() => {   // similar to componentDidMount
        getMovies()
    }, [])

    function getMovies() {
        axios.get("/movies")
            // .then(res => console.log(res))  //use this line first to test, then do next
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }

    function deleteMovie(movieId) {
        axios.delete(`/movies/${movieId}`)
            .then(res => {
                setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err))
    }

    function addMovie(newMovie) {
        axios.post("/movies", newMovie)
            .then(res => {
                setMovies(prevMovies => [...prevMovies, res.data])
            })
            .catch(err => console.log(err))

        // req.body._id = v4()
        // movies.push(req.body)
        // res.send(`${req.body.title} has been added to the database`)
    }

    function editMovie(updates, movieId) {  // the order of paramaters is important to make it match the post function better
        axios.put(`/movies/${movieId}`, updates)
            .then(res =>
            // console.log(res))
            { setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data)) })
            .catch(err => console.log(err))
    }

    function handleFilter(e) {
        // console.log(e.target.value)
        if (e.target.value === "reset") {
            getMovies()
        } else {
            axios.get(`/movies/search/genre?genre=${e.target.value}`)
                .then(res => setMovies(res.data))
                .catch(err => console.log(err))

        }
    }

    return (
        <div className="movie-container">
            <AddMovieForm
                submit={addMovie}
                btnText="Add Movie"
            />
            <h4>Filter by genre</h4>
            <select onChange={handleFilter} className="filter-form">
                <option value="reset">All Movies</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="romance">Romance</option>
                <option value="horror">Horror</option>
            </select>

            {movies.map(movie =>
                <Movie
                    editMovie={editMovie}
                    deleteMovie={deleteMovie}
                    {...movie}
                    key={movie._id}
                />)}

        </div>
    )
}

export default App