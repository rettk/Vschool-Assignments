import React from "react"

function Movie(props) {
    // console.log(props) // do this to check the props are accurate first, then when good 
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>Genre: {props.genre}</h2>
            <h2>Release Date: {props.releaseDate}</h2>
            <div>Key: {props._id}</div>
        </div>
    )
}

export default Movie