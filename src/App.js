import "./Styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home";
import DashboardPage from "./components/pages/Dashboard";
import RunsPage from "./components/pages/Runs/index";
import AboutPage from "./components/pages/About";
import ProfilePage from "./components/pages/Profile";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="Page-Content">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/Dashboard" element={<DashboardPage />}></Route>
          <Route path="/Runs" element={<RunsPage />}></Route>
          <Route path="/About" element={<AboutPage />}></Route>
          <Route path="/Profile" element={<ProfilePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
