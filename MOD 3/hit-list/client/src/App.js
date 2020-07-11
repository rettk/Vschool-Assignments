import React from "react"
import ListItem from "./ListItem.js"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            stuff: []
        }

    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    stuff: data
                })
            })

    }

    render() {
        console.log(this.state.stuff)
        const listItem = this.state.stuff.map(item =>
            <ListItem key={item.name} name={item.name} image={item.image} />
        )

        return (
            <div >

                <div id="container">{listItem}</div>

            </div>

        )

    }

}


export default App 