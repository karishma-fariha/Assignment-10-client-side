import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";

const AddProperties = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    location: "",
    image: "",
    userEmail: user?.email,
    userName: user?.displayName,
    created_at: new Date().toISOString()
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Done!",
        text: "Property added successfully",
      });

      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        location: "",
        image: "",
        userEmail: user?.email,
        userName: user?.displayName,
        created_at: new Date().toISOString(),
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Property</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <input
          name="name"
          type="text"
          placeholder="Property Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <select
          name="category"
          required
          value={formData.category}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="">Select Category</option>
          <option value="Rent">Rent</option>
          <option value="Sale">Sale</option>
          <option value="Commercial">Commercial</option>
          <option value="Land">Land</option>
        </select>

        <input
          name="price"
          type="number"
          placeholder="Price"
          required
          value={formData.price}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          name="location"
          type="text"
          placeholder="Location"
          required
          value={formData.location}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          name="image"
          type="text"
          placeholder="Image URL"
          required
          value={formData.image}
          onChange={handleChange}
          className="input input-bordered w-full"
        />

        <input
          type="email"
          value={user?.email}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        <input
          type="text"
          value={user?.displayName}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        <textarea
          name="description"
          placeholder="Description"
          rows={4}
          required
          value={formData.description}
          onChange={handleChange}
          className="textarea textarea-bordered md:col-span-2"
        />

        <button className="btn btn-primary md:col-span-2 w-full">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperties;
