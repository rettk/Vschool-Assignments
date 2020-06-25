import React from "react"
import vacationSpots from "./VacationsList.js"
import Spot from "./Spot.js"
import "./styles.css"


const App = () => {
    const vacationList = vacationSpots.map(spot => <Spot place={spot.place} price={spot.price} time={spot.timeToGo} />) //works without key={spot.place}
    return (
        <div>{vacationList}</div>
    )
}

export default App

