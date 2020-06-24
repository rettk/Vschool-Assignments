import React from "react"
// import data from "./FriendList.json"

const Pet = (props) => {
    
    return (
        <div>
            <h3>Pet: {props.name}</h3>
            <h3>Breed: {props.breed}</h3>
        </div>
    )
}


export default Pet

