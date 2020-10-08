import React, { useContext } from "react"
import { StateContext } from "../stateContext.js"

function Comment(props) {

    const { issues } = useContext(StateContext)
    console.log(props)
    return (
        <div>
            <text>{props.text}</text>
            <text>{` posted by ${props.user}`}</text>
            <text>{` on ${props.date.slice(0,10)}`}</text>
        </div>
    )

}

export default Comment