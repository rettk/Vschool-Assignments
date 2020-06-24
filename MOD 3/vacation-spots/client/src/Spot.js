import React from "react"
// className also works below

const Spot = (props) => {
    
        return (
            <div className={props.time === "Winter" || props.time === "Fall" ? "card" : "cardwarm"}>
                <h1 className={props.time === "Winter" || props.time === "Fall" ? "place" : "placewarm"}>{props.place}</h1>
                <h2 className="price">{props.price}</h2>
                <h2 className="time">{props.time}</h2>
            </div>
        )

}




export default Spot





// other option
// if (props.time === "Winter" || props.time === "Fall") {
//     return (
//         <div class="card">
//             <h1 className="place">{props.place}</h1>
//             <h2 className="price">{props.price}</h2>
//             <h2 className="time">{props.time}</h2>
//         </div>
//     )
// } else {
//     return (
//         <div class="cardwarm">
//             <h1 className="placewarm">{props.place}</h1>
//             <h2 className="price">{props.price}</h2>
//             <h2 className="time">{props.time}</h2>
//         </div>
//     )
// }
// }









// const Spot = (props) => {
//     return (
//             if (props.time === "Winter" || props.time === "Fall") {
//         <div class="card">
//             } else {
//         <div class="cardwarm">}
//                 <h1 className="place">{props.place}</h1>
//                     <h2 className="price">{props.price}</h2>
//                     <h2 className="time">{props.time}</h2>
//                 </div>
//         )
//     }