import React from "react";
import { Button, Form, Input } from "antd";
import bg from "../assets/bg.jpg";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="text-white p-8"
        style={{ backgroundColor: "rgba(0,0,0,0.47)" }}
      >
        <h1 className="text-center mb-6 text-3xl font-bold">Sign in</h1>
        <Form
          name="basic"
          style={{
            width: "400px",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item className="flex justify-center">
            <Button
              className="text-white"
              style={{ backgroundColor: "#FDCC0D" }}
              htmlType="submit"
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
