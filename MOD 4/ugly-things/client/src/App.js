// using hooks for this project

import React, { useState } from "react"

function App() {

    const [inputData, setInputData] = useState({ title: "", url: "", description: "" })
    // const [title, setTitle] = useState("")  -----  this is another way to build this
    const [finalData, setFinalData] = useState([])

    function handleChange(event) {
        const { name, value } = event.target
        setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setFinalData(prevFinalData => [...prevFinalData, inputData])
        setInputData({ title: "", url: "", description: "" })
    }

    const displayList = finalData.map(item => <div>
        <h1 key={item.title}>{item.title}</h1>
        <img src={item.url} alt={item.description}  />
        <h2 key={item.description}>{item.description}</h2>


    </div>)

    // console.log(finalData)

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="Title"
                        // value={title}
                        value={inputData.title}
                        name="title"
                        // onChange={(e)=>setTitle(e.target.value)}
                        onChange={handleChange}
                    >

                    </input>

                    <input placeholder="Image url"
                        name="url"
                        value={inputData.url}
                        onChange={handleChange}
                    >

                    </input>

                    <input
                        placeholder="Description"
                        value={inputData.description}
                        name="description"
                        onChange={handleChange}
                    >

                    </input>
                    <br /><br />
                    <button>SUBMIT!</button>

                </div>

            </form>

            {displayList}

        </div>
    )
}

export default App