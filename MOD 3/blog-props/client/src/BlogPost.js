import React from "react"

const BlogPost = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <h3>Posted by {props.author} on {props.date}</h3>
        </div>
    )
}


export default BlogPost