import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import logo from "../assets/logo.svg";
import "../App.css"
import WorkflowBuilder from "./WorkList";

const Login = ({ messageApi, onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    const { email, password } = values;

    try {
      // Simulate fetching login data from a database or API
      const response = await fetch("/src/database/login.json");
      const loginData = await response.json();

      // Validate credentials
      if (email === loginData.email && password === loginData.password) {
        messageApi.success("Login successful!");
        onLoginSuccess(); 
      } else {
        messageApi.error("Invalid email or password!");
      }
    } catch (error) {
      messageApi.error("An error occurred while logging in.");
      console.error("Error fetching login data:", error);
    }

    setLoading(false);
  };

  return (
    <div className="logincontainer flex h-screen ">
      {/* Left Section */}

      <div className="w-1/2  flex flex-col justify-center items-center ">
       
          <div className="mb-25">
            <img
              src={logo} // Replace with your logo URL
              alt="HighBridge Logo"
              className="pr-[100px]"
            />
          </div>

          <div className="flex w-1/2 flex-col items-start">
            <h3 className="text-3xl font-bold text-white mb-2 ">
              Building the Future...
            </h3>
            <p className="text-base text-white opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
      
      </div>

      {/* Right Section */}
      
      <div className="w-1/2 flex items-end justify-start">
        <div className="px-6 relative bg-white py-6 w-96 rounded-t-lg">
          <h6 className="text font-semibold text-gray-500 mb-1">
            WELCOME BACK!
          </h6>
          <h1 className="text-xl font-bold mb-6">Log In to your Account</h1>

          <Form layout="vertical" onFinish={handleLogin}>
            {/* Email Input */}
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Type here..." />
            </Form.Item>

            {/* Password Input */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Type here..." />
            </Form.Item>

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center mb-4">
              <Checkbox>Remember me</Checkbox>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-bold"
                loading={loading}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-2 text-gray-500">OR</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col gap-2">
            <Button
              icon={<GoogleOutlined />}
              className="w-full flex items-center justify-center bg-black hover:bg-gray-800 text-white"
            >
              Log In with Google
            </Button>
            <Button
              icon={<FacebookOutlined />}
              className="w-full flex items-center justify-center bg-black hover:bg-gray-800 text-white"
            >
              Log In with Facebook
            </Button>
            <Button
              icon={<AppleOutlined />}
              className="w-full flex items-center justify-center bg-black hover:bg-gray-800 text-white"
            >
              Log In with Apple
            </Button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <span className="text-gray-500">New User? </span>
            <a href="#" className="text-blue-500 hover:underline">
              SIGN UP HERE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
