import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, id, phone, address, website } = props.friend;
    const history = useHistory();
    const friendStyle = {
        border: '2px solid goldenrod',
        borderRadius: '8px',
        padding: '10px',
        margin: '5px',
    };
    const url = `/friend/${id}`;

    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }

    return (
        <div style={friendStyle}>
            <h2>I am {name} {id}</h2>
            <h5>My number is {phone}</h5>
            <p>I live in {address.city}</p>
            <p>Visit me: {website}</p>
            <Link to={url}>Visit me</Link>
            <br />
            <Link to={url}>
                <button>visit me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me2</button>

        </div>
    );
};

export default Friend;