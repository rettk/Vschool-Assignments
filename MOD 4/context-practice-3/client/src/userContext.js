import React from "react"


// const UserContext = React.createContext()   destructure:

const { Provider, Consumer } = React.createContext()


class UserContextProvider extends React.Component {

    state = {
        username: "start"
    }

    changeName = (nameGiven) => {
        this.setState({ username: nameGiven })
    }

    render() {
        // const {username} = this.state
        return (

            <Provider value={{ username: this.state.username, changeName: this.changeName }}>

                {this.props.children}

            </Provider>

        )

    }

}

export { UserContextProvider, Consumer as UserContextConsumer }


