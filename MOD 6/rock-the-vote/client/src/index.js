import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import { BrowserRouter } from "react-router-dom"
import "./styles.css"
import { StateContextProvider } from "./StateContextProvider"

ReactDOM.render(
    <StateContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StateContextProvider>
    ,
    document.getElementById("root"))


