import React from "react"
import { Switch, Link, Route } from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"

function Header() {
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