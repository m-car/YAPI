import React, { useState } from "react";

import { Link, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
import Auth from "../utils/auth";
import "./home.css";
import { useQuery } from "@apollo/client";
import { QUERY_SEARCH } from "../utils/queries";

const Home = () => {
  const [searchState, setSearchState] = useState({ input: "" });
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { userSearch } = useParams();

  const { loading, data } = useQuery(QUERY_SEARCH, {
    variables: { userSearch: userSearch },
  });

  // submit form
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    console.log(searchState.input);
    const userInput = searchState.input || {};
    window.location = `/list/${userInput}`;
  };

  const handleFormChange = (event) => {
    const { value } = event.target;

    setSearchState({
      input: value,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="hero">
        <header className="hero-header">
          <h1 className="hero-title">YAPI</h1>
          <h4 className="hero-description">
            Crowd-sourced reviews on the API's we use.
          </h4>
        </header>
        <footer className="hero-footer">
          <div className="search">
            <form onSubmit={handleSearchSubmit}>
              <input
                className="input"
                type="text"
                placeholder={"Search API or Category"}
                value={searchState.input}
                onChange={handleFormChange}
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
        </footer>
      </section>

      <section className="wrapper">
        <div className="span-third">
          <p className="placeholder"></p>
        </div>
        <div className="span-twothirds">
          <p className="sans summary justify">
            We have all spent too many hours scowering the web for a not so
            great API that ends up not working out in the end. Back to square
            one again, looking for an API, but this time don't waste your
            precious time. Alot of developers can relate, so they come to YAPI
            to leave a review on their experience with an API. You don't have to
            test all API's to see if they are compatible with your project, the
            users of YAPI fix that problem. Look up any API and find out what
            other developers think of it. Or maybe you've used an API that ended
            up not giving you the result you wanted, let other users know by
            leaving a review.
          </p>
          <p className="sans summary">
            The team at YAPI want users to share their insights on API's that
            are not found at the surface level. Users leave great reviews that
            allow interested users to make a decision of thier own. We hope that
            you save time and reach those deadlines with time to spare.
          </p>
        </div>
        <div className="line-left summary span-fourth sans">
          <p>
            Vivi Cowan:
            <br /> "Versatile Vivi, with glasses"
            <br /> <FaGithub /> :{" "}
            <a href="https://github.com/vivicowan">Github</a>
            <br /> <FaLinkedin /> :{" "}
            <a href="https://www.linkedin.com/in/vivianna-cowan-400b061a6/">
              Linked In
            </a>
            <br /> <FaYelp /> :{" "}
            <a href="https://www.yelp.com/user_details?userid=op0RGG8Te6GD5vUItQiQmQ">
              Yelp
            </a>
          </p>
        </div>
        <div className="line-left span-fourth summary sans">
          <p>
            Maxwell Dunn:
            <br /> "The Machine, Mad Max"
            <br /> <FaGithub /> : <a href="https://github.com/maxd66">Github</a>
            <br /> <FaLinkedin /> :{" "}
            <a href="https://www.linkedin.com/in/maxwell-dunn-a30374188/">
              Linked In
            </a>
            <br /> <FaYelp /> :{" "}
            <a href="https://www.yelp.com/user_details?userid=yZqDLyLFqtW6-eRgMhVNbw">
              Yelp
            </a>
          </p>
        </div>
        <div className="line-left span-fourth summary sans">
          <p>
            Marko Caric:
            <br /> "Mega Mind Marko"
            <br /> <FaGithub /> : <a href="https://github.com/m-car">Github</a>
            <br /> <FaLinkedin /> :{" "}
            <a href="https://www.linkedin.com/in/markocaric">Linked In</a>
            <br /> <FaYelp /> :{" "}
            <a href="https://www.yelp.com/user_details?userid=sxgaZCKsl_vagbtfBQ-nGA">
              Yelp
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
