import { Button, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const baseUrl = "https://api.farm.ustadev.uz/v1";

const ProductCategoryCreate = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const token = localStorage.getItem("token");
  const handleClick = () => {
    fetch(`${baseUrl}/user/product-category/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: input }),
    })
      .then((res) => res.json())
      .then((res) => navigate("/farmer/product-category/index	"));
  };
  return (
    <div>
      <div>
        <h1 className="mb-5 text-2xl font-bold">Kategoriya qo'shish</h1>
        <Input
          placeholder="Kategoriya nomi"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button className="mt-3" onClick={handleClick}>
          Qo'shish
        </Button>
      </div>
    </div>
  );
};

export default ProductCategoryCreate;
