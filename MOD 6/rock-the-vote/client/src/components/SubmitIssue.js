import React, { useContext, useState } from "react"
import { StateContext } from "../stateContext.js"

function SubmitIssue() {

    const [inputData, setInputData] = useState({
        title: "",
        description: ""
    })

    const { addIssue } = useContext(StateContext)

    function handleChange(e) {
        const { name, value } = e.target
        
        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // console.log(inputData)

    function handleSubmit(e) {
        // e.preventDefault()
        addIssue(inputData)
    }


    return (
        <div>
            <h3>Post a New Issue</h3>
            <form onSubmit={handleSubmit}> 
                <div className="field">
                    Issue <input onChange={handleChange} type="text" name="title" value={inputData.title}></input>
                </div>
                <div className="field">
                    Description <input onChange={handleChange} type="text" name="description" value={inputData.description}></input>
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}


export default SubmitIssue