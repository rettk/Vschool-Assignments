import React, { useState, useEffect } from "react"
import EnterBounty from "./components/EnterBounty"
import axios from "axios"

function App() {


    let [bounties, setBounties] = useState([])

    useEffect(() => {
        getAll()

    }, [])


    function getAll() {
        return (
            axios.get("/")
                .then(res => console.log(res))
                .catch(err => console.log(err))
        )
    }


    function addBounty(bounty) {

        return (
            axios.post("/", bounty)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        )
    }

    return (
        <div>
            <h1>The Bounty Hunter's Database</h1>
            <EnterBounty addBounty={addBounty} />



        </div>
    )
}

export default App



/*  design

main section: top part has form to enter new bounties.
Next part lists first name of bounties with the amount next to them.
Button expands view and has edit/delete/mark killed buttons.

recent kills: section with recent "kills" - lists most recent kills and the date killed, recent first




*/