import React from "react"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import { Link, Switch, Route } from "react-router-dom"

function App() {
    return (
        <div>
            <navbar>
                <Link to="/">Home</Link> <nbsr /><nbsr />
                <Link to="services">Services</Link> <nbsr /><nbsr />
                <Link to="about">About</Link>

            </navbar>

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/services"><Services /></Route>
                <Route path="/about"><About /></Route>

            </Switch>

            <footer>The Footer</footer>
        </div>

    )
}

export default App