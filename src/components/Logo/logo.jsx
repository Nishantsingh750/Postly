import React from 'react';
import logoImage from '../../assets/logo.png';
 // Adjust the path as needed

function Logo({classname, width = '80px' }) {
  return (
    <img src={logoImage} alt="Postly Logo" className={`object-cover ${classname}`}style={{ width ,height: width}} />
  );
}

export default Logo;
