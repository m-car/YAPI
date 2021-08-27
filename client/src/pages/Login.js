import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import "./login.css";

import Auth from "../utils/auth";

const Login = (props) => {
  // const [whichForm, setWhichForm] = useState("login");
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // const switchForm = (e, form) => {
  //   if (form === whichForm) {
  //     return;
  //   } else if (form === "login") {
  //     setWhichForm("login");
  //   } else {
  //     setWhichForm("signUp");
  //   }
  // };

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

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-10 col-lg-7 customContainer">
        <div className="formContainer">
          <div className="card-header p-2 head">
            <button>
              <h4>Login</h4>
            </button>
            <button>
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
                <label for="email" className="emailLabel">
                  Email
                </label>
                <input
                  className="userInput userPassword"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <label for="password" className="passwordLabel">
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
