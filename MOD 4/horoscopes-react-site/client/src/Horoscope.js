import React from "react"

function Horoscope(props) {

    return (
        <div>
            <h1>Your lucky color: {props.color}</h1>
            <span style={{ backgroundColor: props.color }}></span>

            <div>{props.description}</div>
        </div>
    )

}



export default Horoscope