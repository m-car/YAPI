import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import "./login-signup.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const loginClickHandler = (e) => {
    window.location = "/login";
  };
  // /made some changes

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-10 col-lg-7 customContainer">
        <div className="formContainer">
          <div className="card-header p-2 head">
            <button
              onClick={loginClickHandler}
              className="headButton inactiveSection"
            >
              <h4>Login</h4>
            </button>
            <h2 className="divider">|</h2>
            <button className="headButton activeSection">
              <h4>Sign Up</h4>
            </button>
          </div>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="userInput username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <label
                  for="username"
                  className={
                    formState.username
                      ? "usernameSignupLabelStatic"
                      : "usernameSignupLabel"
                  }
                >
                  Username
                </label>
                <input
                  className="userInput userSignupEmail"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <label
                  for="email"
                  className={
                    formState.email
                      ? "emailSignupLabelStatic"
                      : "emailSignupLabel"
                  }
                >
                  Email
                </label>
                <input
                  className="userInput userSignupPassword"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <label
                  for="password"
                  className={
                    formState.password
                      ? "passwordSignupLabelStatic"
                      : "passwordSignupLabel"
                  }
                >
                  Password
                </label>
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
