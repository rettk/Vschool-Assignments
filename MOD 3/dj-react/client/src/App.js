import React from "react"

// lights.map(light => <Light color={light}/>)

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
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
                        <button onClick={this.state.colors[0] === "white" ?
                            setState({ colors: ["black", "black", "black", "black"] }) :
                            setState({ colors: ["white", "white", "white", "white"] })
                        }>Black/White</button>
                    </div>
                    <div class="button">
                        <button>Press Me</button>
                    </div>
                    <div class="button">
                        <button>Press Me</button>
                    </div>
                    <div class="button">
                        <button>Press Me</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default App