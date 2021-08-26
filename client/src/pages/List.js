import React from "react";
import Categories from "../components/Categories";
import "./list.css";

import { useQuery } from "@apollo/client";
import { QUERY_SEARCH } from "../utils/queries";
import { useParams } from "react-router-dom";

const List = () => {
  const { userSearch } = useParams();
  console.log(userSearch);
  const { data, loading, error } = useQuery(QUERY_SEARCH, {
    variables: { input: userSearch },
  });

  console.log(data);

  return (
    <div>
      <div className="resContainer">
        {data?.search.map((api) => (
          <ApiCard api={api} />
        ))}
      </div>
      <Categories />
    </div>
  );
};

function ApiCard({ api }) {
  return (
    <div className="searchResult" key={api.title}>
      <h3>{api.title}</h3>
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
  );
}

export default List;
