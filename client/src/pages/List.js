import React from "react";
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
import cloudstoragefilesharing from "../assets/images/cloud-storage-&-file-sharing.png";
import continuousintegration from "../assets/images/continuous-integration.png";
import cryptocurrency from "../assets/images/cryptocurrency.jpg";
import currencyexchange from "../assets/images/currency-exchange.jpg";
import datavalidation from "../assets/images/data-validation.jpg";
import development from "../assets/images/development.jpg";
import dictionaries from "../assets/images/dictionaries.jpg";
import documentsproductivity from "../assets/images/documents-&-productivity.jpg";
import environment from "../assets/images/environment.jpg";
import events from "../assets/images/events.jpg";
import finance from "../assets/images/finance.jpg";
import fooddrink from "../assets/images/food-&-drink.jpg";
import gamescomics from "../assets/images/games-&-comics.jpg";
import geocoding from "../assets/images/geocoding.png";
import government from "../assets/images/government.jpg";
import health from "../assets/images/health.png";
import jobs from "../assets/images/jobs.jpg";
import machinelearning from "../assets/images/machine-learning.jpg";
import music from "../assets/images/music.jpg";
import news from "../assets/images/news.jpg";
import opendata from "../assets/images/open-data.png";
import opensourceprojects from "../assets/images/open-source-projects.png";
import patent from "../assets/images/patent.jpg";
import personality from "../assets/images/personality.jpg";
import phone from "../assets/images/phone.jpg";
import photography from "../assets/images/photography.jpg";
import sciencemath from "../assets/images/science-&-math.jpg";
import security from "../assets/images/security.jpg";
import shopping from "../assets/images/shopping.jpg";
import social from "../assets/images/social.jpg";
import sportsfitness from "../assets/images/sports-&-fitness.jpg";
import testdata from "../assets/images/test-data.jpg";
import textanalysis from "../assets/images/text-analysis.png";
import tracking from "../assets/images/tracking.jpg";
import transportation from "../assets/images/transportation.jpg";
import urlshorteners from "../assets/images/url-shorteners.jpeg";
import vehicle from "../assets/images/vehicle.jpg";
import video from "../assets/images/video.jpg";
import weather from "../assets/images/weather.jpg";

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
    case "cloudstoragefilesharing":
      bgImg = {
        backgroundImage: `url(${cloudstoragefilesharing})`,
      };
      break;
    case "continuousintegration":
      bgImg = {
        backgroundImage: `url(${continuousintegration})`,
      };
      break;
    case "cryptocurrency":
      bgImg = {
        backgroundImage: `url(${cryptocurrency})`,
      };
      break;
    case "currencyexchange":
      bgImg = {
        backgroundImage: `url(${currencyexchange})`,
      };
      break;
    case "datavalidation":
      bgImg = {
        backgroundImage: `url(${datavalidation})`,
      };
      break;
    case "development":
      bgImg = {
        backgroundImage: `url(${development})`,
      };
      break;
    case "dictionaries":
      bgImg = {
        backgroundImage: `url(${dictionaries})`,
      };
      break;
    case "documentsproductivity":
      bgImg = {
        backgroundImage: `url(${documentsproductivity})`,
      };
      break;
    case "environment":
      bgImg = {
        backgroundImage: `url(${environment})`,
      };
      break;
    case "events":
      bgImg = {
        backgroundImage: `url(${events})`,
      };
      break;
    case "finance":
      bgImg = {
        backgroundImage: `url(${finance})`,
      };
      break;
    case "fooddrink":
      bgImg = {
        backgroundImage: `url(${fooddrink})`,
      };
      break;
    case "gamescomics":
      bgImg = {
        backgroundImage: `url(${gamescomics})`,
      };
      break;
    case "geocoding":
      bgImg = {
        backgroundImage: `url(${geocoding})`,
      };
      break;
    case "government":
      bgImg = {
        backgroundImage: `url(${government})`,
      };
      break;
    case "health":
      bgImg = {
        backgroundImage: `url(${health})`,
      };
      break;
    case "jobs":
      bgImg = {
        backgroundImage: `url(${jobs})`,
      };
      break;
    case "machinelearning":
      bgImg = {
        backgroundImage: `url(${machinelearning})`,
      };
      break;
    case "music":
      bgImg = {
        backgroundImage: `url(${music})`,
      };
      break;
    case "news":
      bgImg = {
        backgroundImage: `url(${news})`,
      };
      break;
    case "opendata":
      bgImg = {
        backgroundImage: `url(${opendata})`,
      };
      break;
    case "opensourceprojects":
      bgImg = {
        backgroundImage: `url(${opensourceprojects})`,
      };
      break;
    case "patent":
      bgImg = {
        backgroundImage: `url(${patent})`,
      };
      break;
    case "personality":
      bgImg = {
        backgroundImage: `url(${personality})`,
      };
      break;
    case "phone":
      bgImg = {
        backgroundImage: `url(${phone})`,
      };
      break;
    case "photography":
      bgImg = {
        backgroundImage: `url(${photography})`,
      };
      break;
    case "sciencemath":
      bgImg = {
        backgroundImage: `url(${sciencemath})`,
      };
      break;
    case "security":
      bgImg = {
        backgroundImage: `url(${security})`,
      };
      break;
    case "shopping":
      bgImg = {
        backgroundImage: `url(${shopping})`,
      };
      break;
    case "social":
      bgImg = {
        backgroundImage: `url(${social})`,
      };
      break;
    case "sportsfitness":
      bgImg = {
        backgroundImage: `url(${sportsfitness})`,
      };
      break;
    case "testdata":
      bgImg = {
        backgroundImage: `url(${testdata})`,
      };
      break;
    case "textanalysis":
      bgImg = {
        backgroundImage: `url(${textanalysis})`,
      };
      break;
    case "tracking":
      bgImg = {
        backgroundImage: `url(${tracking})`,
      };
      break;
    case "transportation":
      bgImg = {
        backgroundImage: `url(${transportation})`,
      };
      break;
    case "urlshorteners":
      bgImg = {
        backgroundImage: `url(${urlshorteners})`,
      };
      break;
    case "vehicle":
      bgImg = {
        backgroundImage: `url(${vehicle})`,
      };
      break;
    case "video":
      bgImg = {
        backgroundImage: `url(${video})`,
      };
      break;
    case "weather":
      bgImg = {
        backgroundImage: `url(${weather})`,
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
