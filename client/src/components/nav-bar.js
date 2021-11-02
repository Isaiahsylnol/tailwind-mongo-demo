import React from 'react';
import AuthNav from './auth-nav';
import Header from './Header';

const NavBar = () => {
  return (
    <div className="bg-red-300 mt-6">
      <Header />
      <AuthNav />
    </div>
  );
};

export default NavBar;