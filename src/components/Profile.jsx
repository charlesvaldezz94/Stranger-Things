import React from 'react';

const Profile = () => {
    const token = window.localStorage.getItem('token')

    
    return (
        <h1>
        <div>{token}'s Profile page</div>
        <div> Welcome ! </div>
        <div>Messages: 0</div>
        </h1>
    )
}
export default Profile