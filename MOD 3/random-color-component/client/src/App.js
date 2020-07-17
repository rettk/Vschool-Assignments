import React from "react"
import RandomColor from "./RandomColor.js"

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            stuff: { colors: [{ hex: 0 }] }
        }
        // this.refreshPage = this.refreshPage.bind(this)
    }

    componentDidMount() {
        fetch("http://www.colr.org/json/color/random")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    stuff: data
                })
            })
            .catch(error => console.log(error))
    }


    // componentDidUpdate() {
    //     fetch("http://www.colr.org/json/color/random")
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 stuff: data
    //             })
    //         })
    //         .catch(error => console.log(error))
    // }



    refreshPage = () => {
        fetch("http://www.colr.org/json/color/random")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    stuff: data
                })
            })
    }



    render() {
        console.log(this.state.stuff.colors[0].hex)
        return (
            <div>
                <div><RandomColor key={this.state.stuff.colors[0].id} color={this.state.stuff.colors[0].hex} /></div>
                <br />

                <button onClick={this.refreshPage}>New Color</button>

            </div>
        )
    }

}


export default App