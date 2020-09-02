import React, { useState } from "react"
import axios from "axios"

function Login() {
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: ""
    })

    function onSubmit(e) {
        e.preventDefault()
        axios.post()
    }

    function handleChange(e) {
        let { name, value } = e.target

        return (
            setUserDetails(prevUserDetails => ({ ...prevUserDetails, [name]: value }))
        )
    }

    // console.log(userDetails)

    return (
        <div>
            
            <form onSubmit={onSubmit}>
                <input name="username"
                    value={userDetails.username}
                    onChange={handleChange}
                    placeholder="username"
                    className="sign-in-item"
                    >

                </input>
                <input name="password"
                    value={userDetails.password}
                    onChange={handleChange}
                    placeholder="password"
                    className="sign-in-item"
                    >

                </input>
                <button className="sign-in-item">Login</button>
            </form>
        </div>
    )
}

export default Login