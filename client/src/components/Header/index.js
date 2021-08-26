import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import yapilogo from "../../assets/images/yapi-logo.png";
import Auth from "../../utils/auth";
import "./header.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="container flex-row justify-space-between-lg justify-center align-center">
      <div>
        <Link className="text-light" to="/">
          <img className="yapilogo" src={yapilogo} alt="yapi logo"></img>
        </Link>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Link className="btn btn-lg btn-info m-2" to="/select">
              {Auth.getProfile().data.username}'s SELECTED API
            </Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-lg btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
