import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_REVIEW } from "../../utils/mutations";
import decode from "jwt-decode";
import Auth from "../../utils/auth";

let userInfo = {
  data: {
    username: "Not logged in."
  }
}
if (Auth.getToken()) {
  userInfo = decode(Auth.getToken());
}
console.log(userInfo)
console.log(userInfo.data.username)

const ReviewForm = ({ ReviewId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addReview, { error }] = useMutation(ADD_REVIEW);
  const { apiId } = useParams();

  const handleFormSubmit = async (event) => {
    // event.preventDefault();

    try {
      const { data } = await addReview({
        // $api: ID!, $username: String!, $rating: Int!, $comment: String
        variables: {
          comment: commentText,
          username: userInfo.data.username,
          rating: 5,
          api: apiId
        },

      });
      console.log(data)

      setCommentText("");
      console.log("submit ok")
    } catch (err) {
      console.error(err);
      console.log("error on submit")
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What are your thoughts on this API?</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${characterCount === 280 || error ? "text-danger" : ""
              }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div>
              stars rating TODO
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Comment
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ReviewForm;
