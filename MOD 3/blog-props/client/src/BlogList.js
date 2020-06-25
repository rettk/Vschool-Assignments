import React from "react"
import BlogPost from "./BlogPost.js"
import pageContent from "./pageContent.js"

const BlogList = () => {
    const blogPost = pageContent.map(item => <BlogPost title = {item.title} subTitle = {item.subTitle} author = {item.author} date = {item.date}/>)

    return (
        <div>
            {blogPost}
        </div>
    )
}


export default BlogList