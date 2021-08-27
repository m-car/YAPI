import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import "./login-signup.css";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  const signupClickHandler = (e) => {
    window.location = "/signup";
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-10 col-lg-7 customContainer">
        <div className="formContainer">
          <div className="card-header p-2 head">
            <button className="headButton activeSection">
              <h4>Login</h4>
            </button>
            <h2 className="divider">|</h2>
            <button
              id="signupButton"
              onClick={signupClickHandler}
              className="headButton inactiveSection"
            >
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
                  className="userInput userEmail"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <label
                  htmlFor="email"
                  className={
                    formState.email ? "emailLabelStatic" : "emailLabel"
                  }
                >
                  Email
                </label>
                <input
                  className="userInput userPassword"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <label
                  htmlFor="password"
                  className={
                    formState.password ? "passwordLabelStatic" : "passwordLabel"
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

export default Login;
