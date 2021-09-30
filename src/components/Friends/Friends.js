import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div className="friends">
            <h2>They are my friend: {friends.length}</h2>
            <div className="friend-container">
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}

                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;