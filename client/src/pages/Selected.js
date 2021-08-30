import React from "react";
import ReviewForm from "../components/ReviewForm/index";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { useParams } from "react-router-dom";
import { QUERY_API } from "../utils/queries";
import { useQuery } from "@apollo/client";
import "./selected.css";
import { FaQuestionCircle } from "react-icons/fa";

import Auth from "../utils/auth";
import { getArgumentValues } from "graphql/execution/values";

const Selected = () => {
  const { apiId } = useParams();
  const { data, loading } = useQuery(QUERY_API, {
    variables: {
      id: apiId,
    },
  });
  const reviews = data?.getApi.reviews;

  //average rating
  // console.log(reviews)
  // console.log("rating:" + reviews[0].rating)
  // console.log("Total Reviews: " + reviews.length)
  let sumRating = 0;
  let avgRating;
  for (var i = 0; i < reviews?.length; i++) {
    // console.log("rating:" + reviews[i].rating)
    sumRating = sumRating + reviews[i].rating;
    // console.log("Rating Sum is: " + sumRating)
    avgRating = sumRating / reviews.length;
    // console.log("the average rating is:" + avgRating)
  }
  const selectedAPI = [
    {
      title: data?.getApi.title,
      category: data?.getApi.category,
      description: data?.getApi.description,
      url: data?.getApi.url,
      auth: data?.getApi.auth,
      https: data?.getApi.https,
      cors: data?.getApi.cors,
      rating: data?.getApi.rating,
    },
  ];
  if (loading) {
    return <h3>loading reviews...</h3>;
  }

  const checkReviews = () => {
    let result = false;
    // console.log(Auth.loggedIn());
    if (Auth.loggedIn()) {
      reviews.forEach((val) => {
        if (val.username === Auth.getProfile().data.username) {
          result = true;
        }
      });
    }
    return result;
  };

  // console.log(checkReviews());

  return (
    <main className="flex-row justify-center  mb-4">
      <div className="col-12 col-lg-10">
        {/* 1 API INFO */}

        {selectedAPI.map((api) => (
          <div key={api.url} className="card">
            <h1 className="darkBg p-2">
              {api.title}{" "}
              {api.rating === -1 ? (
                <span className="noReviews">💔No reviews</span>
              ) : (
                <span>
                  <Rater total={5} rating={avgRating} interactive={false} />
                  {api.rating}
                  <span className="ratingStarColor"></span>
                </span>
              )}
            </h1>
            <div className="card-body px-4">
              <h2>{api.description}</h2>
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
              <p>
                Visit {api.title} by <a href={api.url}>clicking here</a>
              </p>
            </div>
          </div>
        ))}

        {/* Review box add context if user is not logged in cant leave review*/}
        {checkReviews() ? (
          <h2>Thank you for leaving a review!</h2>
        ) : (
          <ReviewForm />
        )}

        {/* Reviews list */}
        <br></br>
        <div className="card">
          <h1 className="lightBg p-2">Reviews</h1>

          {reviews?.map((rev) => (
            <div key={rev._id} className="card-body individualReview">
              <h2 className="reviewHeader">
                {rev.username}{" "}
                <span className="ratingNumber">
                  <span className="ratingStarColor">
                    <Rater total={5} rating={rev.rating} interactive={false} />
                  </span>
                </span>{" "}
                <span className="smallDate">
                  {new Date(rev.date).toDateString()}
                </span>
              </h2>
              <p className="reviewText">{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Selected;
