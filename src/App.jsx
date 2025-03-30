import React, { useState } from "react";
import { message } from "antd";
import "./App.css";
import Login from "./components/login";
import WorkflowList from "./components/WorkList";


const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false); // Log out the user
    messageApi.info("You have been logged out.");
  };

  return (
    <>
      {contextHolder}
      {isLoggedIn ? (
        <WorkflowList onLogout={handleLogout} /> // Pass logout handler to WorkflowList
      ) : (
        <Login messageApi={messageApi} onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
     
    </>
  );
};

export default App;
