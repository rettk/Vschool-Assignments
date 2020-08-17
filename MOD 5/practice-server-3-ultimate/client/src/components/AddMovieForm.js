import React, { useState } from "react"

function AddMovieForm(props) {
    const initInputs = { title: props.title || "", releaseDate: props.releaseDate || "", genre: props.genre || "" }
    const [tempData, setTempData] = useState(initInputs)

    function handleChange(event) {
        let { name, value } = event.target
        return (
            setTempData((prevTempData) => ({ ...prevTempData, [name]: value }))
        )
    }
    // console.log(tempData)

    function handleSubmit(event) {
        event.preventDefault()
        props.submit(tempData, props._id)
        setTempData(initInputs)
    }

    return (
        <div>
            <form name="form" onSubmit={handleSubmit}>
                <input type="textbox"
                    placeholder="Title"
                    name="title"
                    value={tempData.title}
                    onChange={handleChange}>
                </input>
                {"      "}
                <select onChange={handleChange} className="input-same">
                    <option value="">Select Genre</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="romance">Romance</option>
                    <option value="horror">Horror</option>
                </select>


                {/* <input type="textbox"
                    placeholder="Genre"
                    name="genre"
                    value={tempData.genre}
                    onChange={handleChange}>
                </input> */}
                {"      "}
                <input type="number"
                    min="1900"
                    max="2030"
                    // onFocus="type=date"
                    placeholder="Release Year"
                    style={{ width: 140 }}
                    name="releaseDate"
                    value={tempData.releaseDate}
                    onChange={handleChange}>
                </input>
                {"      "}
                <button>{props.btnText}</button>

            </form>
        </div>
    )
}



export default AddMovieForm