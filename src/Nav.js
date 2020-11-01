import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Signin from "./signin";
import { UserContext } from "./UserContext";

const Nav = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Link to="/loggedout" >loggedout</Link>
          </li>
        ) : (
          <li>
            <Link to="/signin" >signin</Link>
          </li>
        )}

        {isLoggedIn && (
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
