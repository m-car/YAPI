import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import hero from "../assets/images/hero.jpg";
import yapilogo from "../assets/images/yapi-logo.png";
import Auth from "../utils/auth";
import "./home.css";
import { useQuery } from "@apollo/client";

const Home = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <section className="hero">
      <header id="header">
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
      </header>
      <header className="hero-header">
        <h1 className="hero-title">The title of this hero module</h1>
      </header>
      <footer className="hero-footer">
        <div className="search">
          <form>
            <input
              className="input"
              type="text"
              name="s"
              placeholder="How may we help you?"
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </footer>
    </section>
  );
};

export default Home;
