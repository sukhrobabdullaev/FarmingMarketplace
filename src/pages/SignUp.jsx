import React, { useEffect } from "react";
import { Button, Form, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { API } from "../react-query/query";
import { dispatch } from "../redux";
import { useState } from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import { toast } from "react-toastify";
import bg from "../assets/bg.jpg";
import { baseUrl } from "./users/ProductCategory";

function SignUp() {
  const navigate = useNavigate();
  const [smsCode, setSmsCode] = useState(true);
  const [code, setCode] = useState();
  const [roles, setRoles] = useState([]);
  const {
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`${baseUrl}/user/auth/roles`)
      .then((res) => res.json())
      .then((res) => setRoles(res));
  }, []);
  const { mutate } = useMutation(async (payload) => {
    return await API.regiserUser(payload)
      .then((res) => {
        setSmsCode(false);
        dispatch.auth.login(res.data);
      })
      .catch((error) => {
        toast.error(error.response.data[0]?.message);
        console.log("Auth dispatch  error", error);
      });
  });
  const onSubmit = (data) => {
    mutate({ ...data });
  };

  const { mutate: smsCodeVerfiy } = useMutation(async (payload) => {
    return await API.smsCodeVerify(payload)
      .then((res) => {
        if (roles.farmer === "Farmer") {
          navigate("/farmer/dashboard");
        } else if (roles.farmer === "Seller") {
          navigate("/seller/dashboard");
        }
        localStorage.setItem("token", `${res.data?.token}`);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Auth dispatch  error", error);
      });
  });
  const onSubmitSms = () => {
    smsCodeVerfiy(code);
  };
  return (
    <>
      <div
        className="w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className="text-white p-8"
          style={{ backgroundColor: "rgba(0,0,0,0.47)" }}
        >
          <h1 className="text-center mb-6 text-3xl font-bold">Sign up</h1>
          {smsCode === true ? (
            <Form
              className="flex flex-col text-md"
              onFinish={onSubmit}
              autoComplete="on"
            >
              <Form.Item
                className="text-black"
                name="role"
                rules={[
                  {
                    required: true,
                    message: "Iltimos 'role'-ni kiriting!",
                  },
                ]}
              >
                <Radio.Group>
                  {Object.entries(roles).map((role) => (
                    <Radio key={role} value={role[0]} className="text-white">
                      {role[1]}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
              <Form.Item
                className="text-black"
                name="full_name"
                rules={[
                  {
                    required: true,
                    message: "Iltimos 'username'-ni kiriting!",
                  },
                ]}
              >
                <Input
                  placeholder="Username"
                  {...register("full_name")}
                  className="md:p-2 "
                />
              </Form.Item>
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
                />
              </Form.Item>
              <Form.Item
                className="mb-1 "
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Iltimos 'parol'ni kiriting!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Parol"
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
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Form
              autoComplete="on"
              className="flex flex-col  text-md"
              onFinish={onSubmitSms}
            >
              <ReactInputVerificationCode
                length={6}
                onChange={setCode}
                className="text-white"
              />
              <Form.Item>
                <Button
                  htmlType="submit"
                  className="w-full text-white mt-3 border-none"
                  style={{ backgroundColor: "#FDCC0D" }}
                >
                  Confirm
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
      </div>
    </>
  );
}

export default SignUp;
