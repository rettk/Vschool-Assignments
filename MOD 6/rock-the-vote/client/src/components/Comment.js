import React, { useContext } from "react"
import { StateContext } from "../stateContext.js"

function Comment(props) {

    const { issues } = useContext(StateContext)
    console.log(props.user)
    return (
        <div>
            <text>{props.text}</text>
            <text>{` posted by ${props.user}`}</text>
            <text>{` on ${props.date}`}</text>
        </div>
    )

}

export default Comment