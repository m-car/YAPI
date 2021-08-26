import { makeProcessedFieldsMerger } from "@apollo/client/cache/inmemory/helpers";
import React from "react";
// const reviewSeeds = [
// {
//   api: "X",
//   username: "marko",
//   rating: 3,
//   comment: "Wow this app was really helpful"
// },
// ]
const ReviewList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <>
      <h3>
        Comments
      </h3>
      <div >
        {comments &&
          comments.map((comment) => (
            <div className="card-body">
              <h2>User B</h2><p>* * * * *</p>
              <p>Very easy to use, check out my project at github!
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default ReviewList;
