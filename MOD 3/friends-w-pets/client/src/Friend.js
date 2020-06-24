import React from "react"
import Pet from "./Pet.js"

const Friend = (props) => {
    const pets = props.pets.map(item => <Pet name={item.name} breed={item.breed} />)
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            {/* <h1>{props.pets.name}</h1> */}
            {pets}
        </div>
    )
}


export default Friend