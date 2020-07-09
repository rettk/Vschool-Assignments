import React, { Component } from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            destination: "",
            dietRestrictions: {
                isVegan: false,
                isVegetarian: false,
                isLactoseFree: false,
                isGlutenFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState(prevState => {
            return {
                dietRestrictions: {
                    ...prevState.dietRestrictions,
                    [name]: checked
                }
            }
        })
            :

            this.setState({
                [name]: [value]
            })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name" />
                    <br />
                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name" />
                    <br />
                    <input name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age" />
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleChange}
                        />Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleChange}
                        />Female
                    </label>

                    <br />

                    <select
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}>

                        <option>---Select Destination</option>
                        <option value="Honolulu">Honolulu</option>
                        <option value="Paris">Paris</option>
                        <option value="Salt Lake City">Salt Lake City</option>
                    </select>
                    <br />

                    <br />
                    <label>
                        <input type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.dietRestrictions.isVegan}>
                        </input> Vegan?
                    </label>
                    <br />
                    <label>
                        <input type="checkbox"
                            name="isVegetarian"
                            onChange={this.handleChange}
                            checked={this.state.dietRestrictions.isVegetarian}>
                        </input> Vegetarian?
                    </label>
                    <br />
                    <label>
                        <input type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.dietRestrictions.isLactoseFree}>
                        </input> Lactose Free?
                    </label>
                    <br />
                    <label>
                        <input type="checkbox"
                            name="isGlutenFree"
                            onChange={this.handleChange}
                            checked={this.state.dietRestrictions.isGlutenFree}>
                        </input> Gluten Free?
                    </label>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Dietary Restrictions: </p>
                <p>Vegan? {this.state.dietRestrictions.isVegan ? "Yes" : "No"} </p>
                <p>Vegetarian? {this.state.dietRestrictions.isVegetarian ? "Yes" : "No"}</p>
                <p>Lactose Free? {this.state.dietRestrictions.isLactoseFree ? "Yes" : "No"}</p>
                <p>Gluten Free? {this.state.dietRestrictions.isGlutenFree ? "Yes" : "No"}</p>
                {/* <p>Your dietary restrictions: {this.state.dietRestrictions}                */}

            </main>
        )
    }
}

export default App