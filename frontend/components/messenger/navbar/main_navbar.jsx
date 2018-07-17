import React from 'react';

const MainNavbar = ({selectedConvo}) => {
  return (
    <header className='main-navbar'>
      <h1># {selectedConvo.name}</h1>
      <h2>{selectedConvo.description}</h2>
    </header>
  );
};

export default MainNavbar;
