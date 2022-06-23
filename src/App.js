// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home";
import DashboardPage from "./components/pages/Dashboard";
import RunsPage from "./components/pages/Runs";
import AboutPage from "./components/pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/Dashboard" element={<DashboardPage />}>
          <Route index element={<DashboardPage />} />
        </Route>
        <Route path="/Runs" element={<RunsPage />}>
          <Route index element={<RunsPage />} />
        </Route>
        <Route path="/About" element={<AboutPage />}>
          <Route index element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
