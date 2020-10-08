import React, { useContext, useEffect } from "react"
import { StateContext } from "../stateContext.js"
import Issue from "./Issue.js"
import SubmitIssue from "./SubmitIssue.js"

function Profile() {




    const { getYourIssues, issues, upVote, downVote, user, deleteIssue, addComment } = useContext(StateContext)

    // Option 1 to get user Id - get it out of localStorage
    // const userInfo = JSON.parse(localStorage.getItem("user"))
    // console.log(userInfo._id)


    useEffect(() => {
        getYourIssues(user._id)
    }, [])
    // console.log(issues)


    const issueList = issues.map(item =>
        <Issue
            key={item._id}
            _id={item._id}
            title={item.title}
            description={item.description}
            author={item.user}
            user={user}
            upVotes={item.upVotes}
            downVotes={item.downVotes}
            upVote={upVote}
            downVote={downVote}
            comments={item.comments}
            deleteIssue={deleteIssue}
            addComment={addComment}
            date={item.date}
        />
    )

 

    return (
        <div>

            <SubmitIssue />

            <h2>
                Your Issues
            </h2>
            <div>
                {issueList}
            </div>


        </div>
    )
}

export default Profile