import React from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    return (
        <div>
            <h3>Detail Information {friendId}</h3>
        </div>
    );
};

export default FriendDetail;