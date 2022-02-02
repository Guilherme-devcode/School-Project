import React from 'react';

const Hero = ({handleLogout}) => {
  return <div>
    <button onClick={handleLogout}>Sair</button>
  </div>;
}

export default Hero;
