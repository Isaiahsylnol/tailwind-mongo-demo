import React from 'react';

import AuthNav from './auth-nav';
import Header from './Header';
import SignupButton from './signup-button';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <Header />
          <AuthNav />
          {/* <AuthNav /> */}
          <SignupButton />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;