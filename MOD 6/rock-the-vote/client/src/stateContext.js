import React, { useState } from "react"
import axios from "axios"

const StateContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

// Dummy Test Data
// const testIssues = [
//     {
//         _id: "5f4f172d1041ea8b63442d5a",
//         upVotes: [1],
//         downVotes: [],
//         title: "test 1",
//         description: "description 1",
//         user: "tina",
//         comments: [

//         ]
//     },
//     {
//         _id: "5f57a2c73e6c5cb51d6012f8",
//         upVotes: [1, 2, 3, 4, 5],
//         downVotes: [],
//         title: "test 2",
//         description: "description 2",
//         user: "butthead",
//         comments: [

//         ]
//     },
//     {
//         _id: "5f57c889387c0ab9e8d5e618",
//         upVotes: [1, 2, 3],
//         downVotes: [],
//         title: "test 3",
//         description: "description 3",
//         user: "guy",
//         comments: [

//         ]
//     }
// ]

function StateContextProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || "",
        token: localStorage.getItem("token") || "",
        issues: []
    }

    const [userState, setUserState] = useState(initState)


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

    function getIssues() {
        userAxios.get("api/issue")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getYourIssues(userId) {
        userAxios.get(`api/issue/${userId}`)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    function addIssue(newIssue) {
        userAxios.post("/api/issue", newIssue)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteIssue(issueId) {
        // console.log(issueId)
        userAxios.delete(`/api/issue/${issueId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function upVote(issueId) {
        userAxios.put(`api/issue/upvote/${issueId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function downVote(issueId) {
        userAxios.put(`api/issue/downvote/${issueId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addComment(comment, issueId) {
        userAxios.put(`api/issue/comment/${issueId}`, comment)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <StateContext.Provider value={{
            ...userState, setUserState,
            signup,
            login,
            logout,
            addIssue,
            upVote,
            downVote,
            getIssues,
            getYourIssues,
            deleteIssue,
            addComment
        }}>
            {props.children}
        </StateContext.Provider>
    )
}

export { StateContextProvider, StateContext }