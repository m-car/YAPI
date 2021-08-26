import React from "react";
import { FaSearch } from "react-icons/fa";
import "./home.css";
import { useQuery } from "@apollo/client";

const Home = () => {
  return (
    <section class="hero hero--video">
      <div class="search">
        <form>
          <input
            class="input"
            type="text"
            name="s"
            placeholder="How may we help you?"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
