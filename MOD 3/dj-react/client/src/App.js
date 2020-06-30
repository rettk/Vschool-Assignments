import React from "react"


class App extends React.Component {

    constructor() {
        super()
        this.state = ["white", "white", "white", "white"]
    }


    render() {
        return (
            <div id="djBox">
                <div>
                    <button>Press Me</button>
                </div>
                <div>
                    <button>Press Me</button>
                </div>
                <div>
                    <button>Press Me</button>
                </div>
                <div>
                    <button>Press Me</button>
                </div>
            </div>

        )
    }


}

export default App