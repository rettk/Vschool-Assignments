import React, { useState } from "react"
import AddMovieForm from "./AddMovieForm"


function Movie(props) {
    // console.log(props) // do this to check the props are accurate first, then when good 

    const [editToggle, setEditToggle] = useState(false)
    // const {genre, releaseDate, title} = props // this line would allow for the 3 items to be used below
    //without any props..... before it.

    return (
        <div className="movie">
            {!editToggle ?
                <>
                    <h1>{props.title}</h1>
                    <h2>Genre: {props.genre}</h2>
                    <h2>Release Date: {props.releaseDate}</h2>
                    <div>ID#: {props._id}</div>

                    <button onClick={() => props.deleteMovie(props._id)}
                        className="delete-button"
                    >DELETE
                </button>
                    <button
                        className="edit-button"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        EDIT
                    </button>
                </>
                :
                <>
                    <AddMovieForm
                        title={props.title}
                        genre={props.genre}
                        releaseDate={props.releaseDate}
                        _id={props._id}
                        btnText="Submit Edit"
                        submit={props.editMovie}
                    />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                        </button>
                </>
            }

        </div>
    )
}

export default Movie