import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
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
    <div>
      <section className="hero">
        <header className="hero-header">
          <h1 className="hero-title">Crowd-Sourced Reviews on Public API's</h1>
        </header>
        <footer className="hero-footer">
          <div className="search">
            <form>
              <input
                className="input"
                type="text"
                name="s"
                placeholder="What API are you looking for?"
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
        </footer>
      </section>

      <section class="wrapper">
        <div class="span-third">
          <p class="placeholder"></p>
        </div>
        <div class="span-twothirds">
          <p class="sans summary justify">
            We have all spent too many hours scowering the web for a not so
            great API that ends up not working out in the end. Back to square
            one, looking for an API, but this time don't waste your precious
            time. Alot of developers can relate, so they come to YAPI to leave a
            review on their experience with an API. You don't have to test all
            API's to see if they are compatible with your project, the users of
            YAPI fix that problem. Look up any API and find out what other
            developers think of it. Or maybe you've used an API that ended up
            not giving you the result you wanted, let other users know by
            leaving a review.
          </p>
          <p class="sans summary">
            The team at YAPI want users to share their insights on API's that
            are not found at the surface level. Users leave great reviews that
            allow interested users to make a decision of thier own. We hope that
            you save time and reach those deadlines with time to spare.
          </p>
        </div>
        <div class="line-left summary span-fourth sans">
          <p>
            Vivi Cowan:
            <br /> "A cool person"
            <br /> <FaGithub /> :
            <br /> <FaLinkedin /> :
            <br /> <FaYelp /> :
          </p>
        </div>
        <div class="line-left span-fourth summary sans">
          <p>
            Maxwell Dunn:
            <br /> "A cool person"
            <br /> <FaGithub /> :
            <br /> <FaLinkedin /> :
            <br /> <FaYelp /> :
          </p>
        </div>
        <div class="line-left span-fourth summary sans">
          <p>
            Marko Caric:
            <br /> "A cool person"
            <br /> <FaGithub /> :
            <br /> <FaLinkedin /> :
            <br /> <FaYelp /> :
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
