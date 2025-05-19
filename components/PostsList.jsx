import React from 'react'
import { useContext } from 'react'
import PostsContext from '../contexts/Postscontext'

const PostsList = () => {

    let { posts } = useContext(PostsContext);

    return (
        <div>
            <div>
                {posts}
                console.log(post)
            </div>
        </div>
    )
}

export default PostsList
