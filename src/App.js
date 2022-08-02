import "./Styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./components/pages/Home";
import DashboardPage from "./components/pages/Dashboard";
import RunsPage from "./components/pages/Runs/index";
import AboutPage from "./components/pages/About";
import ProfilePage from "./components/pages/Profile";
import Navbar from "./components/layout/Navbar";

function App() {
  const [userProfileData, setUserProfileData] = useState(null);

  useEffect(() => {
    if (userProfileData === null) {
      queryRunLab("athlete/profile", saveUserProfileData);
    }
  }, []);

  const [userStatisticsData, setUserStatisticsData] = useState(null);

  useEffect(() => {
    if (userProfileData !== null) {
      queryRunLab(
        "athlete/statistics?ID=" + userProfileData.id,
        saveUserStatisticsData
      );
    }
  }, [userProfileData]);

  const queryRunLab = async (query, fcn) => {
    var config = {
      method: "get",
      url: "http://localhost:8080/runlab-api/v1/" + query,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    const promise = new Promise((resolve, reject) => {
      axios(config).then((response) => {
        fcn(response.data.body);
      });
    });

    return promise;
  };

  const saveUserProfileData = (data) => {
    return setUserProfileData(data);
  };

  const saveUserStatisticsData = (data) => {
    return setUserStatisticsData(data);
  };

  return (
    <BrowserRouter>
      <Navbar Profile={userProfileData} />
      <div className="Page-Content">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/Dashboard" element={<DashboardPage />}></Route>
          <Route path="/Runs" element={<RunsPage />}></Route>
          <Route path="/About" element={<AboutPage />}></Route>
          <Route
            path="/Profile"
            element={<ProfilePage Statistics={userStatisticsData} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
