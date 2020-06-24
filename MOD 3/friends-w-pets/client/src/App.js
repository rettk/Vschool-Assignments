import React from "react"

import FriendList from "./FriendList.js"
import data from "./FriendList.json"

console.log(data)

const App = () => {

    return (

        <div><FriendList friends={data}/></div>
    )

}


export default App



//sort into its own component

// const FriendListComp = FriendList.map(item => <Friends key = {item.name} name={item.name} age={item.age} pets={item.pets}/>)

// Break down inti sperate components 
//Friendslist - map out your friends in here nd display
//Friend - name age and then MApped pets
// pets   <h1>{breed}</h1>