import React from "react";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registrationpage" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
};

export default App;
