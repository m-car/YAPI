import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ADD_REVIEW } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { QUERY_API } from "../../utils/queries";
import "./reviewForm.css";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};

const ReviewForm = ({ ReviewId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

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
          rating: currentValue,
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
            <div className="alwaysLeft col-12" style={styles.container}>
              <div style={styles.stars}>
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={24}
                      onClick={() => handleClick(index + 1)}
                      onMouseOver={() => handleMouseOver(index + 1)}
                      onMouseLeave={handleMouseLeave}
                      color={
                        (hoverValue || currentValue) > index
                          ? colors.orange
                          : colors.grey
                      }
                      style={{
                        marginRight: 10,
                        cursor: "pointer",
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <p
              className={`m-0 ${
                characterCount === 280 || error
                  ? "text-danger alwaysLeft col-12"
                  : "alwaysLeft col-12"
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
              <button className="btn p-2 reviewSubmitButton" type="submit">
                Add Review
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
