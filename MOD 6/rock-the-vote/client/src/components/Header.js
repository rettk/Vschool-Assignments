import React, { useContext } from "react"
import { Link } from "react-router-dom"

import Login from "./Login"
import { StateContext } from "../stateContext"


function Header() {
    const { logInAndOut, isLoggedIn } = useContext(StateContext)
    console.log(isLoggedIn)
    return (
        <div id="header">
            <div id="main-words" style={{ color: "red" }}>
                <Link to="/"><h1>Rock The Vote</h1></Link>
            </div>
            <div id="login-bar">
                <Login />
            </div>
            <div id="login">
                <div className="login-item">
                    <Link to="/signup">Create an Account</Link>
                </div>

            </div>

        </div>
    )
}

export default Header