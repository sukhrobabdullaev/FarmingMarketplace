import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Seller() {
  const navigate = useNavigate();
  return (
    <div className="mt-32 max-w-[1200px] mx-auto">
      <h1>Seller</h1>
      <Button onClick={() => navigate("/seller/product-category/index")}>
        Categories
      </Button>
    </div>
  );
}

export default Seller;
