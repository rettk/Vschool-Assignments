import React from "react"

// lights.map(light => <Light color={light}/>)

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.allWhite = this.allWhite.bind(this)

        this.topPurple = this.topPurple.bind(this)
        this.leftBlue = this.leftBlue.bind(this)
        this.rightBlue = this.rightBlue.bind(this)
    }

    // below function syntax to negate needing to bind. (Notice no binding above)
    allBlack = () => {
        this.setState({ colors: ["black", "black", "black", "black"] })
    }

    allWhite() {
        this.setState({ colors: ["white", "white", "white", "white"] })
    }

    topPurple() {
        let newArray = this.state.colors.splice(0, 2, "purple", "purple")
        this.setState({ newArray })
    }

    leftBlue() {
        let newArray = this.state.colors.splice(2, 1, "blue")
        this.setState({ newArray })
    }

    rightBlue() {
        let newArray = this.state.colors.splice(3, 1, "blue")
        this.setState({ newArray })
    }

    render() {
        return (
            <div>
                <div id="djBox">
                    <div class="light" style={{ backgroundColor: this.state.colors[0] }}>

                    </div>
                    <div class="light" style={{ backgroundColor: this.state.colors[1] }}>

                    </div>
                    <div class="light" style={{ backgroundColor: this.state.colors[2] }}>

                    </div>
                    <div class="light" style={{ backgroundColor: this.state.colors[3] }}>

                    </div>
                </div>
                <div id="buttonBox">
                    <div class="button">
                        <button onClick={this.state.colors[0] === "white" ? this.allBlack : this.allWhite}>Black/White</button>
                        {/* <button onClick={this.state.colors[0] === "white" ?
                            setState({ colors: ["black", "black", "black", "black"] }) :
                            setState({ colors: ["white", "white", "white", "white"] })
                        }>Black/White</button> */}
                    </div>
                    <div class="button">
                        <button onClick={this.topPurple}>Top Purple</button>
                    </div>
                    <div class="button">
                        <button onClick={this.leftBlue}>Left Blue</button>
                    </div>
                    <div class="button">
                        <button onClick={this.rightBlue}>Right Blue</button>
                    </div>
                </div>
            </div >
        )
    }

}

export default App