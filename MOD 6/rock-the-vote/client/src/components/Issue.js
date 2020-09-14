import React from "react"
import Comment from "./Comment.js"

function Issue(props) {
    // console.log(props)

    const commentList = props.comments.map(item =>
        <Comment
            key={item._id}
            user={item.user}
            text={item.text}
            date={item.date}
        />)

    return (
        <div className="issue">
            <div className="inline">
                <h1>{props.title}</h1>
                {props.user._id === props.author ? <button
                    onClick={() => props.deleteIssue(props._id)}
                    className="small-button">Delete Issue</button> : ""}
            </div>
            <h5>Posted by {props.author}</h5>
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
            <div>
                {commentList}
            </div>
        </div>
    )
}


export default Issue