import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import Movie from "./components/Movie"

function App() {
    const [movies, setMovies] = useState([])
    useEffect(() => {   // similar to componentDidMount
        axios.get("/movies")
            // .then(res => console.log(res))  //use this line first to test, then do next
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {movies.map(movie => <Movie {...movie} key={movie._id}/>)}

        </div>
    )
}

export default App