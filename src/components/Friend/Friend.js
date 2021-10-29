import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';


const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();

    // This function can be use instead of <Link>
    const handleClick = (friendId) => {
        const url = `/about/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'

    }
    return (
    <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            {/* <Link to={`/about/${id}`}>
                <button>Show details of {id}</button>
            </Link> */}
            <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;