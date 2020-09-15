// import { get } from "mongoose"
import React, { useContext, useEffect } from "react"
import { StateContext } from "../stateContext.js"
import Issue from "./Issue.js"


function IssueList() {

    const { issues, upVote, downVote, getIssues, deleteIssue, user, addComment } = useContext(StateContext)
    // console.log(issues)


    useEffect(() => {
        getIssues()
    }, []
    )

    const issuesList = issues.map(item =>
        <Issue key={item._id}
            title={item.title}
            description={item.description}
            author={item.user}
            user={user}
            upVotes={item.upVotes}
            downVotes={item.downVotes}
            upVote={upVote}
            downVote={downVote}
            _id={item._id}
            comments={item.comments}
            deleteIssue={deleteIssue}
            addComment={addComment}
        />
    )

    // console.log(issuesList)

    // this is the sort function to order all the issues by the highest voted on top, lower voted to follow
    issuesList.sort((a, b) => a.props.upVotes.length < b.props.upVotes.length ? 1 : -1)

    return (
        <div>
            {issuesList}
        </div>
    )
}

export default IssueList