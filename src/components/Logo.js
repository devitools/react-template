import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/logo.svg"
      style={{ height: '40px' }}
      {...props}
    />
  );
};

export default Logo;
