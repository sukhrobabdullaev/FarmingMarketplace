import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Seller() {
  const navigate = useNavigate();
  return (
    <div className="mt-32 max-w-[1200px] mx-auto">
      <h1 className="text-center text-3xl font-bold">Sotuvchi</h1>
      <div className="flex gap-x-2 justify-center mt-10">
        <Button onClick={() => navigate("/seller/product-category/list")}>
          Kategoriyalar
        </Button>
        <Button onClick={() => navigate("/seller/product/list")}>
          Mahsulotlar
        </Button>
      </div>
    </div>
  );
}

export default Seller;
