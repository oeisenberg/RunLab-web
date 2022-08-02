import React, { useState } from "react";
import axios from "axios";
import App from "./App";
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";

async function makeQuery(config, fcn) {
  const promise = new Promise(function(resolve, reject) {
    axios(config)
      .then((response) => {
        if (response.data.status !== 200) {
          console.log(response);
          reject("Error");
        } else {
          fcn(response.data.body);
          resolve("Success");
        }
      })
      .catch(function(error) {
        console.log(error);
        reject("Error");
      });
  });
  return promise;
}

function Controller() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const saveJWT = (data) => {
    sessionStorage.setItem("token", data);
  }

  async function setJWT() {
    var config = {
      method: "post",
      url: "http://localhost:8080/runlab-api/v1/token/generate-token",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: username,
        password: password,
      },
    };
    return makeQuery(config, saveJWT).then(
        function() {
          setLoggedIn(true);
          
        },
        function(err) {
          setLoggedIn(false);
        }
      );
  }

  if (isLoggedIn) {
    return <App />;
  } else {
    // return <Register />;
    return <SignIn handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} handleSignIn={setJWT} />;
  }
}

export default Controller;
