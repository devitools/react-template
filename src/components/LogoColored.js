import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/devitools.svg"
      style={{ width: '40%', margin: '0 auto', display: 'block' }}
      {...props}
    />
  );
};

export default Logo;
