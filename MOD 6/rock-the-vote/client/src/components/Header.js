import React, { useContext } from "react"
import { Link } from "react-router-dom"

import Login from "./Login"
import { StateContext } from "../stateContext"


function Header(props) {
    const { login, logout } = useContext(StateContext)
    // const token = localStorage.getItem("token")
    // console.log(JSON.parse(localStorage.getItem("user")))
    return (
        <div>
            <div id="header">
                <div id="main-words" style={{ color: "red" }}>
                    <Link to="/"><h1>Rock The Vote</h1></Link>
                </div>
                <div id="login-bar">
                    <Login login={login} logout={logout} />
                </div>
                <div id="login">
                    <div className="login-item">
                        {localStorage.getItem("token") ? "" : <Link to="/signup">Create an Account</Link>}
                    </div>

                </div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Header