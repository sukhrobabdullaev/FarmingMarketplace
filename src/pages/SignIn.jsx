import React from "react";
import { Button, Form, Input } from "antd";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { API } from "../react-query/query";
import { dispatch } from "../redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import bg from "../assets/bg.jpg";

function SignIn() {
  const {
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { mutate } = useMutation(async (payload) => {
    try {
      const res = await API.login(payload);
      console.log(res);
      if (res.status === 200) {
        // window.location.reload();
        localStorage.setItem("token", res.data?.token);
        dispatch.auth.login(res.data);
        toast.success("Wow so easy!");
        fetch(`https://api.farm.ustadev.uz/v1/user/user/profile`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.role[0] === "farmer")
              navigate("/farmer/dashboard", { replace: true });
            else if (res.role[0] === "seller")
              navigate("/seller/dashboard", { replace: true });
          });
      } else {
        console.log("xatolik");
      }
    } catch (error) {
      toast.error(error.response.data[0]?.message);
      console.log("Auth dispatch error", error.response.data[0]?.message);
    }
  });

  const onSubmit = (data) => {
    mutate({ ...data });
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

        <Form className="flex flex-col" onFinish={onSubmit} autoComplete="on">
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "Iltimos to'gi email kiriting!",
              },
              {
                required: true,
                message: "Iltimos 'email'ni kiriting!",
              },
            ]}
          >
            <Input
              placeholder="E-mail"
              {...register("email")}
              className="md:p-2"
              style={{ color: "white" }}
            />
          </Form.Item>
          <Form.Item
            className="mb-1 bg-none"
            name="password"
            rules={[
              {
                required: true,
                message: "Iltimos 'parol'ni kiriting!",
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              {...register("password")}
              className="md:p-2"
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className="w-full text-white mt-3 border-none"
              style={{ backgroundColor: "#FDCC0D" }}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
