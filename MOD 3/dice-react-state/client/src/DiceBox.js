import React from "react"

class DiceBox extends React.Component {

    constructor() {
        super()
        this.state = {
            num1: [1, "roll"],
            num2: [2, "roll"],
            num3: [3, "roll"],
            num4: [4, "roll"],
            num5: [5, "roll"]

        }
        // console.log(this.state)

        this.rollDie = this.rollDie.bind(this)
        this.rollDice = this.rollDice.bind(this)
        this.holdDie = this.holdDie.bind(this)

    }

    rollDie(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)

        return Math.floor(Math.random() * (max - min) + min)

    }

    rollDice() {
        if (this.state.num1[1] === "roll") {
            this.setState({ num1: [this.rollDie(1, 7), "roll"] })
        }
    }

    

    // rollDice() {
    //     this.setState(prevState => {
    //         let newArray = Object.entries(...prevState)
    //         console.log(newArray)
    //     }



    holdDie(die) {

        // let tester = Object.entries([...prevState])
        // console.log(tester)

        this.setState(prevState => {
            let newArray = [...prevState[die]]
            if (prevState[die][1] === "roll") {
                newArray = prevState[die].slice(0, 1)
                newArray.push("hold")
            } else {
                newArray = prevState[die].slice(0, 1)
                newArray.push("roll")
            }
            return { [die]: newArray }

        })

    }




    render() {
        return (

            <div>
                <div id="container">
                    <div className={this.state.num1[1] === "hold" ? "die-hold" : "die"}>{this.state.num1[0]}<br></br><br></br>
                        <button onClick={() => this.holdDie("num1")}>Hold</button></div>
                    <div className={this.state.num2[1] === "hold" ? "die-hold" : "die"}>{this.state.num2[0]}<br></br><br></br>
                        <button onClick={() => this.holdDie("num2")}>Hold</button></div>
                    <div className={this.state.num3[1] === "hold" ? "die-hold" : "die"}>{this.state.num3[0]}<br></br><br></br>
                        <button onClick={() => this.holdDie("num3")}>Hold</button></div>
                    <div className={this.state.num4[1] === "hold" ? "die-hold" : "die"}>{this.state.num4[0]}<br></br><br></br>
                        <button onClick={() => this.holdDie("num4")}>Hold</button></div>
                    <div className={this.state.num5[1] === "hold" ? "die-hold" : "die"}>{this.state.num5[0]}<br></br><br></br>
                        <button onClick={() => this.holdDie("num5")}>Hold</button></div>

                </div>
                <div>
                    <br></br><button onClick={this.rollDice}>Roll The Dice</button>

                </div>
            </div >

        )
    }
}


export default DiceBox