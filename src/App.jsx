import React from "react";
import { message } from "antd";
import "./App.css";
import Login from "./components/login";

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <Login messageApi={messageApi} />
    </>
  );
};

export default App;
