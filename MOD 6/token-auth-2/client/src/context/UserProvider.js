import React, { useState } from "react"
import { PromiseProvider } from "mongoose"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        todos: []
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
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
                getUserTodos()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.dir(err.response.data.errMsg))
    }

    function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            todos: []
        })
    }

    function getUserTodos() {
        userAxios.get("/api/todo/user")
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    todos: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addTodo(newTodo) {
        // const headers = {Authorization: tokenabc}
        userAxios.post("/api/todo", newTodo)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    todos: [...prevUserState.todos, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addTodo
            }}>
            {props.children}
        </UserContext.Provider>
    )
}