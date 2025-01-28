import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <main className="headercontainer">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <section>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/home/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/home/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/home/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/home/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="verif">
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
        </div>
      </section>
    </main>
  );
};

export default Header;
