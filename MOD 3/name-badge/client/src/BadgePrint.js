import React from "react"

class BadgePrint extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>

                <div>Name: {this.props.firstName} {this.props.lastName}</div>
                <span>Phone: {this.props.phone}</span>
                <br />
                <span>Place of Birth: {this.props.birthPlace}</span>
                <span>Favorite Food: {this.props.favFood}</span>
                <br />
                <span>Email: {this.props.email}</span>
                <br />
                <div id="badgetext">
                {this.props.textArea}


                </div>




            </div>
        )
    }


}

export default BadgePrint