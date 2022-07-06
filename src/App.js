import "./Styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home";
import DashboardPage from "./components/pages/Dashboard";
import RunsPage from "./components/pages/Runs/index";
import AboutPage from "./components/pages/About";
import ProfilePage from "./components/pages/Profile";
import Navbar from "./components/layout/Navbar";

function App() {
  const [userProfileData, setUserProfileData] = useState(null);
  const [userStatisticsData, setUserStatisticsData] = useState(null);
  const [userActivityData, setUserActivityData] = useState(null);

  const queryRunLab = async (query, fcn) => {
    try {
      await fetch("http://localhost:8080/Runlab/" + query)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          fcn(data)
        });
    } catch (err) {
      console.log(err);
    }
  };

  const saveUserProfileData = (data) => {
    setUserProfileData(data.body);
  };

  const saveUserStatisticsData = (data) => {
    setUserStatisticsData(data.body);
  };

  const saveUserActivityData = (data) => {
    setUserActivityData(data.body);
  };
  
  useEffect(() => {
    if (userProfileData === null) {
      queryRunLab("getAtheleteProfile", saveUserProfileData);
    };

    if (userProfileData !== null && userStatisticsData === null) {
        queryRunLab("getAtheleteStatistics/" + userProfileData.id, saveUserStatisticsData);

        // TODO: try figure out a better way of doing this
        if (userActivityData === null) {
          var date = new Date();
          date.setDate(date.getDate() - 28);
          // use date to get the last 4 wks of activity
    
          queryRunLab("refresh", saveUserActivityData);
        }
    }
  });

  return (
    <BrowserRouter>
      <Navbar Profile={userProfileData}/>
      <div className="Page-Content">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Home" element={<HomePage ActivityData={userActivityData} />}></Route>
          <Route path="/Dashboard" element={<DashboardPage ActivityData={userActivityData} />}></Route>
          <Route path="/Runs" element={<RunsPage ActivityData={userActivityData} />}></Route>
          <Route path="/About" element={<AboutPage />}></Route>
          <Route path="/Profile" element={<ProfilePage Statistics={userStatisticsData}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
