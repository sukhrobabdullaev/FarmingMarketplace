import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import { useNavigate } from "react-router-dom";

export const baseUrl = "https://api.farm.ustadev.uz/v1";

const ProductCategory = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [editedInput, setEditedInput] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditOpen, setIsEditOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleEditOk = (id) => {
    setIsEditOpen(false);
    fetch(`${baseUrl}/user/product-category/update?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: editedInput.name }),
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
      .then((res) => setEditedInput(res));
  };

  useEffect(() => {
    fetch("https://api.farm.ustadev.uz/v1/user/product-category/index", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => setList(res.result));
  }, []);

  return (
    <div className="mt-32 max-w-[1200px] mx-auto">
      <Button onClick={showModal}>Open Modal</Button>
      <Modal
        open={isEditOpen}
        onOk={() => handleEditOk(editedInput.id)}
        onCancel={handleEditCancel}
        okType="default"
        centered
      >
        <div className="mt-6">
          <Input
            value={editedInput.name}
            onChange={(e) =>
              setEditedInput({ ...editedInput, name: e.target.value })
            }
          />
        </div>
      </Modal>
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
      </Modal>
      <h1 className="mt-5">Category index</h1>
      <table border="1" className="w-full">
        <tbody>
          {list.map((item, index) => (
            <tr
              key={index}
              className="mt-5 flex justify-between border-b-2 border-black"
            >
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>
                <Button onClick={() => handleEdit(item.id)}>Edit</Button>
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCategory;