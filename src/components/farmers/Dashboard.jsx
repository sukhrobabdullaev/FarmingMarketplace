import React from "react";
import { Card, Col, Row, Button } from "antd";
import { useUserData } from "../../hooks/useUserData";
import { useNavigate } from "react-router-dom";
import AppLoader from "../AppLoader";
import { ArrowDownOutlined } from "@ant-design/icons";

const Dashboard = () => {
  let navigate = useNavigate();

  const { data: userProfile, isLoading, isError } = useUserData();

  if (isLoading) {
    return <AppLoader />;
  }

  if (isError) {
    return <div>Error fetching user data</div>;
  }
  //   console.log(userProfile);
  return (
    <div
      style={{
        backgroundImage: "url(/img/dash_bgUpdated.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-24 max-w-[1200px] mx-auto">
        <h3 className="text-blue-600 text-center text-[30px] mb-6">
          DASHBOARD
        </h3>
        <Row gutter={16} className="flex justify-around ">
          <Col span={8}>
            <Card title="My Details" bordered={false} className="bg-blue-400 ">
              <Card bordered={true} className="font-semibold text-[14px]">
                Email:{" "}
                <span className="text-green-500">{userProfile?.email}</span>
              </Card>
              <Card bordered={true} className="font-semibold text-[14px]">
                Full Name:{" "}
                <span className="text-green-500">{userProfile?.full_name}</span>
              </Card>
              <Card bordered={true} className="font-semibold text-[14px]">
                Role:{" "}
                <span className="text-green-500">{userProfile?.role}</span>
              </Card>
            </Card>
            <Button
              className="bg-amber-500 mt-4 text-white"
              onClick={() => navigate("/seller/product")}
            >
              Mahsulotlar
            </Button>
          </Col>
          <Col span={8}>
            <Card title="Activity" bordered={false} className="bg-blue-400">
              <Card bordered={true} className="font-semibold text-[14px]">
                <img src="/img/activity.jpeg" alt="" />
              </Card>
              <Card bordered={true} className="font-semibold text-[14px]">
                Area: <span className="text-green-500">500 sq.m2</span>
              </Card>
              <Card bordered={true} className="font-semibold text-[14px]">
                Documents:
                <a
                  href="https://docs.google.com/document/d/1dO3aH2ATmS0gyLbRQeAmptTcJOOTZ1lvIqrE4vbW_nM/edit#heading=h.d9oyjdqgvf7p"
                  target="_blank"
                  className="text-green-500"
                >
                  Link <ArrowDownOutlined />
                </a>
              </Card>
              <Card bordered={true} className="font-semibold text-[14px]">
                Posts: <span className="text-green-500">3</span>
              </Card>
              <Card bordered={true} className="font-semibold text-[14px]">
                Phone Number:
                <span className="text-green-500">+998 99 1234567</span>
              </Card>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
