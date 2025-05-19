import React from 'react'
import { useContext } from 'react'
import PostsContext from '../contexts/Postscontext'

const PostsList = () => {

    let { posts } = useContext(PostsContext);

    return (
        <div>
            <div>
                {posts.map(post =>
                    <PostCard key={post.id} post={post} />
                )}
            </div>
        </div>
    )
}

export default PostsList
