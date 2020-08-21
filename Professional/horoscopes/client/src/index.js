import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { SignContextProvider } from "./signContext"
import "./styles.css"



ReactDOM.render(

    <SignContextProvider>
        <Router>
            <App />
        </Router >
    </SignContextProvider>,
    document.getElementById("root"))

