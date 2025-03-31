import React, { useState } from "react";
import { message } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import WorkflowList from "./components/WorkList";

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false); // Log out the user
    messageApi.info("You have been logged out.");
  };

  return (
    <Router>
      {contextHolder}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <WorkflowList onLogout={handleLogout} /> // Pass logout handler to WorkflowList
            ) : (
              <Login messageApi={messageApi} onLoginSuccess={() => setIsLoggedIn(true)} />
            )
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
