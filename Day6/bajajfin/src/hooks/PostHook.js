import React, {useState, useEffect} from 'react'
import axios from 'axios'

function PostHook() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch( err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {
                posts.length ? 
                    posts.map( post => <div key={ post.id } > { post.title} </div> ) :
                    null
            }
        </div>
    )
}

export default PostHook
