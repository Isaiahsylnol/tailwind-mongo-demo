import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
    return (
        <div className="p-8 bg-blue-400">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
  </div>
    );
}

export default Header;