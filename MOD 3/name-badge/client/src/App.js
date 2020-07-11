import React from "react"
import BadgePrint from "./BadgePrint.js"

class App extends React.Component {
    constructor() {
        super()
        this.state = {

            current: [],

            temporary: {
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phone: 0,
                favFood: "",
                textArea: ""
            }

        }

        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        //don't need to bind these if you use the ES6 arrow function style below: i.e. handleSubmit = () => { }


    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState(prevState => {
            return { temporary: { ...prevState.temporary, [name]: value } }
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()

        this.setState(prevState => {
            return {
                ...prevState.current.push(this.state.temporary)
            }
        })
        this.setState({
            temporary: {
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phone: 0,
                favFood: "",
                textArea: ""
            }
        })
        // console.log(this.state.current)
    }

    render() {
        const badges = this.state.current.map(item => <BadgePrint
            key={item.firstName}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            birthPlace={item.birthPlace}
            phone={item.phone}
            favFood={item.favFood}
            textArea={item.textArea} />)
        return (
            <div>
                <div id="container">
                    <form name="form" onSubmit={this.handleSubmit}>
                        <h1>React Name Badge</h1>
                        <input required={true} value={this.state.temporary.firstName} name="firstName" type="text" placeholder="First Name" onChange={this.handleChange} />
                        <input required={true} value={this.state.temporary.lastName} name="lastName" type="text" placeholder="Last Name" onChange={this.handleChange} />
                        <br />
                        <input required={true} value={this.state.temporary.email} name="email" type="text" placeholder="Email" onChange={this.handleChange} />
                        <input required={true} value={this.state.temporary.birthPlace} name="birthPlace" type="text" placeholder="Place of Birth" onChange={this.handleChange} />
                        <br />
                        <input required={true} value={this.state.temporary.phone} name="phone" type="number" placeholder="Phone" onChange={this.handleChange} />
                        <input required={true} value={this.state.temporary.favFood} name="favFood" type="text" placeholder="Favorite Food" onChange={this.handleChange} />
                        <br />
                        <textarea required={true} value={this.state.temporary.textArea} name="textArea" placeholder="Tell us about yourself" onChange={this.handleChange}>

                        </textarea>
                        <br />
                        <div id="button"><button>Submit</button></div>
                    </form>
                    <h1>{this.state.temporary.email}</h1>
                    <br />

                </div>
                {/* <div>{this.state.current.length === 0 ? "" : badges}</div> */}
                <div>{badges}</div>
            </div>
        )
    }

}


export default App


