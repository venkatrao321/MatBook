import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { GoogleOutlined, FacebookOutlined, AppleOutlined } from "@ant-design/icons";
import logo from "../assets/logo.svg";

const SignUp = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        try {
            localStorage.setItem('signupData', JSON.stringify(values));
            message.success('Signup successful! Please login.');
            form.resetFields();
        } catch (error) {
            message.error('An error occurred during signup.');
        }
    };

    return (
        <div className=" logincontainer flex h-screen">
            {/* Left Section - Updated width */}
            <div className="w-3/5 flex flex-col justify-center items-center">
                <div className="mb-25">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[400px]"
                    />
                </div>
                <div className="flex w-3/4 flex-col items-start">
                    <h3 className="text-4xl font-bold text-white mb-2">
                        Join Our Community...
                    </h3>
                    <p className="text-xl text-white opacity-80">
                        Start your journey with us and discover amazing opportunities.
                    </p>
                </div>
            </div>

            {/* Right Section - Updated width and sizing */}
            <div className="w-2/5 flex items-end justify-start">
                <div className="px-8 relative bg-white py-8 w-full rounded-t-lg">
                    <h6 className="text font-semibold text-gray-500 mb-1">
                        GET STARTED
                    </h6>
                    <h1 className="text-xl font-bold mb-6">Create Your Account</h1>

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        className="w-full"
                    >
                        <Form.Item
                            label="Full Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Enter your full name" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your password!' },
                                { min: 6, message: 'Password must be at least 6 characters!' }
                            ]}
                        >
                            <Input.Password placeholder="Create a password" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full bg-black hover:bg-gray-800 text-white font-bold"
                            >
                                Sign Up
                            </Button>
                        </Form.Item>
                    </Form>

                    {/* OR Divider */}
                    <div className="flex items-center my-4">
                        <div className="border-t border-gray-300 flex-grow"></div>
                        <span className="mx-2 text-gray-500">OR</span>
                        <div className="border-t border-gray-300 flex-grow"></div>
                    </div>

                    {/* Social Signup Buttons */}
                    <div className="flex flex-col gap-2">
                        <Button icon={<GoogleOutlined />} className="w-full flex items-center justify-center bg-black hover:bg-gray-800 text-white">
                            Sign Up with Google
                        </Button>
                        <Button icon={<FacebookOutlined />} className="w-full flex items-center justify-center bg-black hover:bg-gray-800 text-white">
                            Sign Up with Facebook
                        </Button>
                        <Button icon={<AppleOutlined />} className="w-full flex items-center justify-center bg-black hover:bg-gray-800 text-white">
                            Sign Up with Apple
                        </Button>
                    </div>

                    {/* Login Link */}
                    <div className="text-center mt-6">
                        <span className="text-gray-500">Already have an account? </span>
                        <Link to="/" className="text-blue-500 hover:underline">
                            LOG IN HERE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;