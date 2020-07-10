import React from "react"

class LineItem extends React.Component {

    constructor() {
        super()
    }


    render(){
        return(
            <li>{this.props.name}</li>
        )
    }
}



export default LineItem