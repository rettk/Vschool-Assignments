import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import Movie from "./components/Movie"
import AddMovieForm from "./components/AddMovieForm"

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

    return (
        <div className="movie-container">
            <AddMovieForm
                submit={addMovie}
                btnText="Add Movie"
            />
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