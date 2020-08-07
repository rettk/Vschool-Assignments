import React, { useState, useEffect } from "react"
import { Switch, Route, } from "react-router-dom"
import Horoscope from "./Horoscope"
import Home from "./Home"

function App() {
    return (
        <div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/horoscope-info">
                    <Horoscope />
                </Route>
            </Switch>
        </div>


    )


}


export default App