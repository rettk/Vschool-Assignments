import React, { useState } from "react"

function Signup(props) {
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: ""
    })

    const { signup } = props

    function onSubmit(e) {
        e.preventDefault()
        signup(userDetails)
    }

    function handleChange(e) {
        let { name, value } = e.target

        return (
            setUserDetails(prevUserDetails => ({ ...prevUserDetails, [name]: value }))
        )
    }

    // console.log(userDetails)
    // console.log(props)

    return (
        <div>
            <div>
                <h2>Create A New Account!</h2>
            </div>
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
                <button className="sign-in-item">SUBMIT</button>
            </form>
        </div>
    )
}

export default Signup