import React, { useState } from "react"
import axios from "axios"

const StateContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function StateContextProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: []
    }

    const [userState, setUserState] = useState(initState)

    // Dummy Test Data
    // const startData = [
    //     {
    //         _id: 0,
    //         votes: [],
    //         title: "",
    //         description: "",
    //     }
    // ]


    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            // .then(res => console.log(res))
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }))
            })
            .catch(err => console.dir(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                // getUserIssues()
                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data.errMsg))
    }


    return (
        <StateContext.Provider value={{
            ...userState, setUserState,
            signup,
            login,
            logout,
            addIssue
        }}>
            {props.children}
        </StateContext.Provider>
    )
}

export { StateContextProvider, StateContext }