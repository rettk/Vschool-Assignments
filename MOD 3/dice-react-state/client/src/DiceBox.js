import React from "react"

class DiceBox extends React.Component {
    constructor() {
        super()

    }

    rollDie(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)

        return Math.floor(Math.random() * (max - min) + min)

    }

    render() {
        return (
            <div>{this.rollDie(1, 7)}</div>
        )
    }


}



export default DiceBox