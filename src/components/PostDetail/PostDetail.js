import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const { title, body } = post;
    const history = useHistory();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const handleClick = () => {
        history.push('/home');
    }
    return (
        <div>
            <h2>{postId} Number post Detail</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <br />
            <button onClick={handleClick}>Back to previous</button>
        </div>
    );
};

export default PostDetail;