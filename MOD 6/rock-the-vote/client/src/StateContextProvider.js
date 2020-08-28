import React, { useState } from "react"
const StateContext = React.createContext()

function StateContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function logInAndOut() {
        setIsLoggedIn(prevIsLoggedIn => {
            prevIsLoggedIn === false ? true : false
        })
    }

    return (
        <StateContextProvider value={{ isLoggedIn, setIsLoggedIn, logInAndOut }}>
            {props.children}
        </StateContextProvider>
    )
}

export { StateContextProvider, StateContext }