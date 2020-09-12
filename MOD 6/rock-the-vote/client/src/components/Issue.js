import React from "react"

function Issue(props) {
    // console.log(props)
    return (
        <div className="issue">
            <h1>{props.title}</h1>
            <h5>Posted by {props.user}</h5>
            <h2>{props.description}</h2>
            <h3>Upvotes:{props.upVotes.length}</h3>
            <h3>Downvotes:{props.downVotes.length}</h3>
            <form>
                <button>Add Comment</button>
            </form>
        </div>
    )
}


export default Issue