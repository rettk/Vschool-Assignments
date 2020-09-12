import React, { useContext } from "react"
import { StateContext } from "../stateContext.js"
import Issue from "./Issue.js"


function IssueList() {

    const { userState, issues } = useContext(StateContext)
    // console.log(issues)
    const issuesList = issues.map(item =>
        <Issue key={item._id}
            title={item.title}
            description={item.description}
            user={item.user}
            upVotes={item.upVotes}
            downVotes={item.downVotes}
        />
    )

    // console.log(issuesList)

    issuesList.sort((a, b) => a.props.upVotes.length < b.props.upVotes.length ? 1 : -1)

    return (
        <div>
            {issuesList}
        </div>
    )
}

export default IssueList