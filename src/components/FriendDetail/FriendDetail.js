import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const { name, id, phone, website, company } = friend;
    const history = useHistory();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    const handleClick = () => {
        history.push('/friends')
    }

    return (
        <div>
            <h3>Friend detail of: {friendId}</h3>
            <h1>{name}</h1>
            <h3>{phone}</h3>
            <h4>{website}</h4>
            <p>works at: {company?.name}</p>
            <br />
            <button onClick={handleClick}>See all Friends</button>


        </div>
    );
};

export default FriendDetail;