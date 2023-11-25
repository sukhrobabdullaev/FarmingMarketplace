// import React from "react";
// import { Button, Radio, Form, Input } from "antd";
// import bg from "../assets/bg.jpg";

// const SignUp = () => {
//   const onFinish = (values) => {
//     fetch("");
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   return (
//     <div
//       className="w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <div
//         className="text-white p-8"
//         style={{ backgroundColor: "rgba(0,0,0,0.47)" }}
//       >
//         <h1 className="text-center mb-6 text-3xl font-bold">Sign up</h1>
//         <Form
//           name="basic"
//           style={{
//             width: "400px",
//           }}
//           initialValues={{
//             remember: true,
//           }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//         >
//           <Form.Item
//             name="role"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your role!",
//               },
//             ]}
//             className="flex justify-center"
//           >
//             <Radio.Group>
//               <Radio value="farmer" className="text-white">
//                 Farmer
//               </Radio>
//               <Radio value="fertilizer" className="text-white">
//                 Fertilizer seller
//               </Radio>
//             </Radio.Group>
//           </Form.Item>

//           <Form.Item
//             name="full_name"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your username!",
//               },
//             ]}
//           >
//             <Input placeholder="Full name" />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your email!",
//               },
//             ]}
//           >
//             <Input placeholder="Email" />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your password!",
//               },
//             ]}
//           >
//             <Input.Password placeholder="Password" />
//           </Form.Item>

//           <Form.Item className="flex justify-center">
//             <Button
//               className="text-white"
//               style={{ backgroundColor: "#FDCC0D" }}
//               htmlType="submit"
//             >
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

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

function SignUp({ setLogin }) {
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
        console.log(res);
        localStorage.setItem("token", `${res.data?.token}`);
        navigate("/farmer");
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
                    <Radio value={role[0]} className="text-white">
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
              {/* <span
                style={{ cursor: "pointer", color: "orange" }}
                onClick={() => setLogin("login")}
              >
                Sign In
              </span> */}
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
