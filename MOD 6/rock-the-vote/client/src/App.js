import React, { useState } from "react"
import Header from "./components/Header.js"
import { Switch, Link, Route } from "react-router-dom"
import Signup from "./components/Signup"
import Home from "./components/Home"

function App() {

    const [issues, setIssues] = useState([])

    return (
        <div>
            <div>
                <Header />
            </div>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/signup"><Signup /></Route>
                <Route path="/login"></Route>
            </Switch>
        </div>
    )
}

export default App