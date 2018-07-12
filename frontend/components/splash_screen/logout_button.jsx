import React from 'react';

const LogoutButton = ({ loggedIn, logout }) => (
    <button onClick={logout} hidden={!loggedIn}>Logout</button>
);

export default LogoutButton;
