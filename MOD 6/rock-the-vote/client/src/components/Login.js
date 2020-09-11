import React, { useState } from "react"

function Login(props) {
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: ""
    })

    const { login, logout } = props

    function onSubmit(e) {
        if (localStorage.getItem("token")) {
            e.preventDefault()
            logout()
        } else {
            e.preventDefault()
            login(userDetails)
        }
    }

    function handleChange(e) {
        let { name, value } = e.target

        return (
            setUserDetails(prevUserDetails => ({ ...prevUserDetails, [name]: value }))
        )
    }

    const username =
        JSON.parse(localStorage.getItem("user")) ?
            JSON.parse(localStorage.getItem("user")) : ''

    // console.log(userDetails)

    return (
        <div>

            <form onSubmit={onSubmit}>

                {username.username ?
                    <h3>{`Welcome ${username.username}!`}</h3>
                    :
                    <div>
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
                    </div>
                }
                {localStorage.getItem("token") ?
                    <button className="sign-in-item">Logout</button> :
                    <button className="sign-in-item">Login</button>}
            </form>
        </div>
    )
}

export default Login