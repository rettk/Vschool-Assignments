import React from "react"

function RandomColor(props) {
    return (
        <div style={{backgroundColor: "#" + props.color, height: 200, width: 200}}></div>
    )

}

export default RandomColor