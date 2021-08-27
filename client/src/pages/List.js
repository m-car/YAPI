import React from "react";
import Categories from "../components/Categories";
import "./list.css";

import { useQuery } from "@apollo/client";
import { QUERY_SEARCH } from "../utils/queries";
import { useParams } from "react-router-dom";

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
  return (
    <div className="searchResult">
      <div className="searchDescription">
        <h3>{api.title}</h3>
        <p>{getRating(api)}</p>
        <h5>{api.category}</h5>
        <p>{api.description}</p>
        <button
          onClick={() => {
            window.location = `/selected/${api._id}`;
          }}
        >
          More details
        </button>
        <button
          onClick={() => {
            window.location = api.url;
          }}
        >
          Check them out
        </button>
      </div>
      <div className="categoryPhoto"></div>
    </div>
  );
}

export default List;
