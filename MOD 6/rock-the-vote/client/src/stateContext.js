import React, { useState } from "react"
const StateContext = React.createContext()

function StateContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [issueData, setIssueData] = useState([])

    // Dummy Test Data
    // const startData = [
    //     {
    //         _id: 0,
    //         votes: [],
    //         title: "",
    //         description: "",
    //     }
    // ]

    function logInAndOut() {
        setIsLoggedIn(prevIsLoggedIn => prevIsLoggedIn === true ? false : true)
    }

    return (
        <StateContext.Provider value={{
            isLoggedIn, setIsLoggedIn,
            logInAndOut,
            issueData, setIssueData
        }}>
            {props.children}
        </StateContext.Provider>
    )
}

export { StateContextProvider, StateContext }