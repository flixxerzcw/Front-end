import React from 'react';
import logo from '../Logos and icons/FLIXXER.png'; // Adjust the path to where your logo is located

const MainHeader = () => {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
    </header>
  );
};

const headerStyle = {
  width: '100%',
  height: '70px',
  backgroundColor: '#000000',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  padding: '0rem',
};


const logoStyle = {
  height: '70px', // Adjust the height to fit the header
  marginRight: '2rem', // Space between logo and text
  padding: '1.5rem'
};

const titleStyle = {
  fontSize: '1.5rem', // Adjust font size
};

export default MainHeader;
