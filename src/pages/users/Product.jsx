import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";

export const baseUrl = "https://api.farm.ustadev.uz/v1";

const Product = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [category, setCategory] = useState([]);

  const [list, setList] = useState([]);

  const [input, setInput] = useState("");

  const [editedInput, setEditedInput] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditOpen, setIsEditOpen] = useState(false);

	const [name, setName] = useState("");
	const [photo, setPhoto] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleEditOk = (id) => {
    setIsEditOpen(false);
    fetch(`${baseUrl}/user/product/update?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: editedInput.name }),
    })
      .then((res) => res.json())
      .then((res) =>
        fetch("https://api.farm.ustadev.uz/v1/user/product/index", {
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
    fetch(`${baseUrl}/user/product/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() =>
        fetch("https://api.farm.ustadev.uz/v1/user/product/index", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => res.json())
          .then((res) => setList(res.result))
      );
  };
  const handleOk = () => {
    setIsModalOpen(false);
    fetch(`${baseUrl}/user/product/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: input }),
    })
      .then((res) => res.json())
      .then((res) =>
        fetch("https://api.farm.ustadev.uz/v1/user/product/index", {
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
    fetch(`${baseUrl}/user/product/view?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setEditedInput(res));
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    fetch("https://api.farm.ustadev.uz/v1/user/product-category/index", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => setCategory(res.result));
    fetch(`${baseUrl}/user/product/index`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => res.json());
  }, []);

  return (
    <div className="mt-32 max-w-[1200px] mx-auto">
      <Button onClick={showModal}>Open Modal 2222 </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okType="default"
        centered
      >
        <div className="flex flex-col gap-5">
          <h1 className="mb-5 text-2xl font-bold">Mahsulot qo'shish</h1>
          <Input
            placeholder="Mahsulot nomi"
          />
          <select
            name=""
            id=""
            defaultValue={""}
            className="border-2 border-black w-full py-2 rounded-4"
          >
            {category.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <input type="file" className="w-full" />
          <Input placeholder="Narxi" type="number" min={0} />
          <textarea
            className="w-full border-2 border-black"
            placeholder="Subtext"
            cols="30"
            rows="5"
          ></textarea>
          <textarea
            className="w-full border-2 border-black"
            placeholder="Body	"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </Modal>
      <h1 className="mt-5">Category index</h1>
      {/* <table border="1" className="w-full">
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
      </table> */}
    </div>
  );
};

export default Product;
