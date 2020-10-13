import React, { useContext } from "react"
import Header from "./components/Header.js"
import { Switch, Route, Redirect } from "react-router-dom"
import Signup from "./components/Signup"
import IssuesList from "./components/IssuesList.js"
import Home from "./components/Home"
import Profile from "./components/Profile.js"
import { StateContext } from "./stateContext"

function App() {

    const { signup, token } = useContext(StateContext)

    return (
        <div>
            <div>
                <Header />
            </div>
            <Switch>
                <Route exact path="/"
                    render={() => token ? <Redirect to="/profile" /> : <Home />}
                >
                </Route>
                <Route path="/signup"><Signup signup={signup} /></Route>
                <Route path="/profile"
                    render={() => !token ? <Redirect to="/" /> : <Profile />}
                ></Route>
                <Route path="/issues"><IssuesList /></Route>
            </Switch>
        </div >
    )
}

export default App