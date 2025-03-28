import React, { useState } from "react";
import { message } from "antd";
import "./App.css";
import Login from "./components/login";
import WorkflowList from "./components/WorkList";

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {contextHolder}
      {isLoggedIn ? (
        <WorkflowList />
      ) : (
        <Login messageApi={messageApi} onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};

export default App;
