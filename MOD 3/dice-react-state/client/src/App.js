import React from "react"
import DiceBox from "./DiceBox.js"

class App extends React.Component {

    constructor() {
        super()
        this.rollDice = this.rollDice.bind(this)

    }

    rollDice() {
        this.forceUpdate()
    }

    render() {

        return (
            <div>
                <div id="container">
                    <div className="die"><DiceBox /></div>
                    <div className="die"><DiceBox /></div>
                    <div className="die"><DiceBox /></div>
                    <div className="die"><DiceBox /></div>
                    <div className="die"><DiceBox /></div>

                </div>
                <div>
                    <br></br><button onClick={this.rollDice}>Roll The Dice</button>
                </div>
            </div>
        )
    }


}



export default App