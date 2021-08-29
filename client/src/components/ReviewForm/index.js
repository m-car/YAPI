import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_REVIEW } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { QUERY_API } from "../../utils/queries";
import "./reviewForm.css";

const ReviewForm = ({ ReviewId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addReview, { error }] = useMutation(ADD_REVIEW, {
    refetchQueries: [QUERY_API],
  });
  const { apiId } = useParams();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addReview({
        variables: {
          comment: commentText,
          username: Auth.getProfile().data.username,
          rating: 5,
          api: apiId,
        },
      });

      setCommentText("");
    } catch (err) {
      console.error(err);
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
      <h4 className="formHeader col-12">What are your thoughts on this API?</h4>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="alwaysLeft">stars rating TODO</div>
            <p
              className={`m-0 ${
                characterCount === 280 || error
                  ? "text-danger alwaysLeft"
                  : "alwaysLeft"
              }`}
            >
              Character Count: {characterCount}/280
              {error && <span className="ml-2">{error.message}</span>}
            </p>
            <div className="col-12">
              <textarea
                name="commentText"
                value={commentText}
                className="textAreaInput"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <label
                htmlFor="commentText"
                className={commentText ? "commentLabelStatic" : "commentLabel"}
              >
                Add your comment...
              </label>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn p-2 commentSubmitButton" type="submit">
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
