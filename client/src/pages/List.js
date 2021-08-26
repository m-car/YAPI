import React from "react";
import Categories from "../components/Categories";
import "./list.css";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

const List = () => {
  const results = [
    {
      title: "Dog API",
      category: "Animals",
      description: "An API about dogs and what not.",
      url: "https://dogsapi.com",
      auth: "apiKey",
      https: "Yes",
      cors: "No",
    },
    {
      title: "Cat API",
      category: "Animals",
      description: "An API about cats and what not.",
      url: "https://catsapi.com",
      auth: "apiKey",
      https: "No",
      cors: "Yes",
    },
    {
      title: "Movie API",
      category: "Movies",
      description: "An API about movies and what not.",
      url: "https://moviesapi.com",
      auth: "apiKey",
      https: "yes",
      cors: "No",
    },
  ];

  let arr = [];

  results.forEach((el) => {
    const block = (
      <div className="searchResult" key={el.title}>
        <h3>{el.title}</h3>
        <h5>{el.category}</h5>
        <p>{el.description}</p>
        <p>
          Auth:<span className="authTag">{el.auth}</span>
          <br></br>Https:<span className="httpsTag">{el.https}</span>
          <br></br>cors:
          <span className="corsTag">{el.cors}</span>
        </p>
        <button
          onClick={() => {
            window.location = el.url;
          }}
        >
          Check it out
        </button>
      </div>
    );
    arr.push(block);
  });

  return (
    <div>
      <div className="resContainer">{arr}</div>
      <Categories />
    </div>
  );
};

export default List;
