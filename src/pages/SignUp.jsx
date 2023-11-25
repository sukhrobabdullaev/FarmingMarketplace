import React from "react";
import { Button, Radio, Form, Input } from "antd";
import bg from "../assets/bg.jpg";

const SignUp = () => {
  const onFinish = (values) => {
    fetch("");
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
        <h1 className="text-center mb-6 text-3xl font-bold">Sign up</h1>
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
            name="role"
            rules={[
              {
                required: true,
                message: "Please input your role!",
              },
            ]}
            className="flex justify-center"
          >
            <Radio.Group>
              <Radio value="farmer" className="text-white">
                Farmer
              </Radio>
              <Radio value="fertilizer" className="text-white">
                Fertilizer seller
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="full_name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Full name" />
          </Form.Item>

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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
