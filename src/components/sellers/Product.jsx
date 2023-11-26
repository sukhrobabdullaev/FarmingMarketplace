import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

export const baseUrl = "https://api.farm.ustadev.uz/v1";

const Product = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleEditOk = (id) => {
    setIsModalOpen(false);
    fetch(`${baseUrl}/user/product-category/update?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: input }),
    })
      .then((res) => res.json())
      .then((res) =>
        fetch("https://api.farm.ustadev.uz/v1/user/product-category/index", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => res.json())
          .then((res) => setList(res.result))
          .then((res) => setInput(""))
      );
  };
  const handleEditCancel = () => {
    setIsEditOpen(false);
  };
  const handleDelete = (id) => {
    fetch(`${baseUrl}/user/product-category/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() =>
        fetch("https://api.farm.ustadev.uz/v1/user/product-category/index", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => res.json())
          .then((res) => setList(res.result))
      );
  };
  const handleOk = () => {
    setIsModalOpen(false);
    fetch(`${baseUrl}/user/product-category/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: input }),
    })
      .then((res) => res.json())
      .then((res) =>
        fetch("https://api.farm.ustadev.uz/v1/user/product-category/index", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => res.json())
          .then((res) => setList(res.result))
          .then((res) => setInput(""))
      );
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleEdit = (id) => {
    setIsEditOpen(true);
    fetch(`${baseUrl}/user/product-category/view?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    fetch("https://api.farm.ustadev.uz/v1/user/product", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => setList(res.result));
  }, []);

  return (
    <div className="mt-32 max-w-[1200px] mx-auto">
      {/* <div className="flex justify-center mt-10">
        <Button onClick={showModal}>Open Modal</Button>
      </div>
      <Modal
        open={isEditOpen}
        onOk={() => handleEditOk(item.id)}
        onCancel={handleEditCancel}
        okType="default"
        centered
      ></Modal>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okType="default"
        centered
      >
        <div>
          <h1 className="mb-5 text-2xl font-bold">Kategoriya qo'shish</h1>
          <Input
            placeholder="Kategoriya nomi"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
      </Modal> */}
      <h1 className="text-center text-3xl font-bold my-5">
        Mahsulotlar indeksi
      </h1>
      <div className="grid grid-cols-3 justify-center justify-items-center gap-6 mt-10">
        {list.map((item, index) => (
          <Card
            hoverable
            style={{ width: 350 }}
            cover={
              <img
                alt="example"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeScQL8ymcm4z-S-zLQYMLXnZkXyQ-0WoUQ&usqp=CAU"
              />
            }
          >
            <Meta
              title={`${item.name}, ${item.price} so'm`}
              description={`${item.sub_text}`}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Product;
