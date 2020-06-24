import React from "react"

import Friend from "./Friend.js"



function FriendList(props) {
    const friendList = props.friends.map(item => <Friend key={item.name} name={item.name} age={item.age} pets={item.pets} />)
    return (
        <div>{friendList}</div>
    )
}

export default FriendList












// const friendsJ = JSON.parse(friends)


//   export default friends
//   export default friendsJ