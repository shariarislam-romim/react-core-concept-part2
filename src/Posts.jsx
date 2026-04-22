import { use } from "react"
import Post from "./Post"

export default function Posts({postsPromise}){

    const posts =use(postsPromise)
    console.log(posts)
    return(
        <div>
            <h2>All posts are here</h2>
            <p>Total Post : {posts.length}</p>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}