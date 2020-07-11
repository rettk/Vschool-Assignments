import React from "react"


const ListItem = function (props) {

    return (
        <div>
            <img src={props.image ? props.image : "https://www.shoppopdisplays.com/mm5/graphics/00000001/Fluorescent%20Blue%20Box_1_2_520x520.jpg"} alt="" height={200} width={200} ></img>
            <br />
            <div style={{ textAlign: "center", borderStyle: "solid" }}>{props.name}</div>
        </div>
    )

}


export default ListItem



// style={{top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}