import React, { useEffect, useState } from "react";

const ProductCategory = () => {
  const [categoryList] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("https://api.farm.ustadev.uz/v1/user/product-category", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return <div>ProductCategory</div>;
};

export default ProductCategory;
