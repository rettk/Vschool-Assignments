import React from "react"

function Issue(props) {
    // console.log(props)
    return (
        <div className="issue">
            <h1>{props.title}</h1>
            <h5>Posted by {props.user}</h5>
            <h2>{props.description}</h2>
            <div className="votes">
                <h3>Upvotes: {props.upVotes.length}</h3>
                <form>
                    <button className="buttons" onClick={() => props.upVote(props._id)}>Up Vote</button>
                </form>
            </div>
            <div className="votes">
                <h3>Downvotes: {props.downVotes.length}</h3>
                <form>
                    <button className="buttons" onClick={() => props.downVote(props._id)}>Down Vote</button>
                </form>
            </div>
            <form>
                <button>Add Comment</button>
            </form>
        </div>
    )
}


export default Issue