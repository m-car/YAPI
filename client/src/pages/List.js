import React from "react";
import Categories from "../components/Categories";
import "./list.css";

import { useQuery } from "@apollo/client";
import { QUERY_SEARCH } from "../utils/queries";
import { useParams } from "react-router-dom";

import animals from "../assets/images/animals.png";
import anime from "../assets/images/anime.jpg";
import artdesign from "../assets/images/art-&-design.jpg";
import authentication from "../assets/images/authentication.jpg";
import books from "../assets/images/books.jpg";
import business from "../assets/images/business.jpg";
import calendar from "../assets/images/calendar.jpg";

const List = () => {
  const { userSearch } = useParams();
  console.log(userSearch);
  const { data } = useQuery(QUERY_SEARCH, {
    variables: { input: userSearch },
  });

  return (
    <div>
      <div className="resContainer">
        {data?.search.map((api) => (
          <ApiCard api={api} key={api._id} />
        ))}
      </div>
      <Categories />
    </div>
  );
};

function getRating(data) {
  if (data.rating === -1) {
    return "This API has no reviews yet.";
  } else {
    return data.rating;
  }
}

function ApiCard({ api }) {
  let bgImg;
  const bgFile = api.category
    .toLowerCase()
    .split(" ")
    .filter((val) => val.match(/^[a-z]/))
    .join("");
  switch (bgFile) {
    case "animals":
      bgImg = {
        backgroundImage: `url(${animals})`,
      };
      break;
    case "anime":
      bgImg = {
        backgroundImage: `url(${anime})`,
      };
      break;
    case "artdesign":
      bgImg = {
        backgroundImage: `url(${artdesign})`,
      };
      break;
    case "authentication":
      bgImg = {
        backgroundImage: `url(${authentication})`,
      };
      break;
    case "books":
      bgImg = {
        backgroundImage: `url(${books})`,
      };
      break;
    case "business":
      bgImg = {
        backgroundImage: `url(${business})`,
      };
      break;
    case "calendar":
      bgImg = {
        backgroundImage: `url(${calendar})`,
      };
      break;
    default:
      break;
  }

  return (
    <div className="searchResult">
      <div className="searchDescription">
        <h3 className="cardTitle">{api.title}</h3>
        <p className="cardRating">⭐{getRating(api)}</p>
        <h5 className="cardCategory">{api.category}</h5>
        <p className="cardDescription">{api.description}</p>
        <button
          className="detailButton"
          onClick={() => {
            window.location = `/selected/${api._id}`;
          }}
        >
          More details
        </button>
        <button
          className="linkButton"
          onClick={() => {
            window.location = api.url;
          }}
        >
          Check them out
        </button>
      </div>
      <div className="categoryPhoto" style={bgImg}></div>
    </div>
  );
}

export default List;
