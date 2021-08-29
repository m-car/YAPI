import React from "react";
import ReviewForm from "../components/ReviewForm/index";
import { useParams } from "react-router-dom";
import { QUERY_API } from "../utils/queries";
import { useQuery } from "@apollo/client";
import "./selected.css";
import { FaQuestionCircle } from "react-icons/fa";

const Selected = () => {
  const { apiId } = useParams();
  const { data, loading } = useQuery(QUERY_API, {
    variables: {
      id: apiId,
    },
  });
  const reviews = data?.getApi.reviews;

  const selectedAPI = [
    {
      title: data?.getApi.title,
      category: data?.getApi.category,
      description: data?.getApi.description,
      url: data?.getApi.url,
      auth: data?.getApi.auth,
      https: data?.getApi.https,
      cors: data?.getApi.cors,
    },
  ];
  if (loading) {
    return <h3>loading reviews...</h3>;
  }

  return (
    <main className="flex-row justify-center  mb-4">
      <div className="col-12 col-lg-10">
        {/* 1 API INFO */}

        {selectedAPI.map((api) => (
          <div key={api.url} className="card">
            <h1 className="card-header bg-dark text-light p-2">{api.title}</h1>
            <div className="card-body">
              <h2>{api.description}</h2>
              <p>Rating : 5 </p>
              <table className="selectedTable">
                <tr>
                  <th>Category</th>
                  <td>{api.category}</td>
                </tr>
                <tr>
                  <th>
                    Https{" "}
                    <a href="https://developer.squareup.com/docs/working-with-apis/tls-and-https">
                      <FaQuestionCircle />
                    </a>
                  </th>
                  <td>{api.https}</td>
                </tr>
                <tr>
                  <th>
                    Auth{" "}
                    <a href="https://rapidapi.com/blog/api-glossary/api-authentication/">
                      <FaQuestionCircle />
                    </a>
                  </th>
                  <td>{api.auth}</td>
                </tr>
                <tr>
                  <th>
                    Cors{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">
                      <FaQuestionCircle />
                    </a>
                  </th>
                  <td>{api.cors}</td>
                </tr>
              </table>
              <a href={api.url}>Link to Site</a>
            </div>
          </div>
        ))}

        {/* Review box add context if user is not logged in cant leave review*/}
        <ReviewForm />

        {/* Reviews list */}
        <br></br>
        <div className="card">
          <h1 className="card-header bg-dark text-light p-2">Reviews</h1>

          {reviews?.map((rev) => (
            <div key={rev._id} className="card-body">
              <h2>{rev.username}</h2>
              <p>{rev.rating}</p>
              <p>{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Selected;
