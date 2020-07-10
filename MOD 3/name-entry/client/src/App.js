import React from "react"
import LineItem from "./LineItem.js"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            names: ["buba", "shooba", "gubbs"],
            text: [""]
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return {
                ...prevState.names.push(this.state.text)
            }
        })
        this.setState({
            text: ""
        })
    }


    render() {
        const lineItems = this.state.names.map(item => <LineItem name={item} />)
        return (
            <div>
                <h1>Name Entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.text}
                        type="text"
                        name="text"
                        placeholder="type names here"
                        onChange={this.handleChange}>
                    </input>
                    <button>Submit</button>
                </form>
                <br />
                <ol>
                    {lineItems}
                </ol>
                <br />
                <h1>{this.state.text}</h1>
            </div >
        )
    }
}

export default App