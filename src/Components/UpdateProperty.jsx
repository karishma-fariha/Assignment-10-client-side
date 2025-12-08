import React, { useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const UpdateProperty = ({ property, onClose, onUpdated }) => {

  const [formData, setFormData] = useState({
    name: property.name,
    description: property.description,
    category: property.category,
    price: property.price,
    location: property.location,
    image: property.image
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const res = await fetch(`https://home-nest-server-side.vercel.app/properties/${property._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Property updated successfully",
        timer: 1500,
        showConfirmButton: false,
      });
      onUpdated({ ...property, ...formData });

      onClose();
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Nothing was updated",
      });
    }

  }

  return (
    <div className="fixed inset-0 bg-base-200 bg-opacity-50 flex justify-center items-center z-50">

      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-primary">Update Property</h2>

        {/* Property Inputs */}
        <input
          className="input input-bordered w-full mb-2"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Property Name"
        />

        <textarea
          className="textarea textarea-bordered w-full mb-2"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          placeholder="Description"
        />

        <select
          className="select select-bordered w-full mb-2"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Rent">Rent</option>
          <option value="Sale">Sale</option>
          <option value="Commercial">Commercial</option>
          <option value="Land">Land</option>
        </select>

        <input
          className="input input-bordered w-full mb-2"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <input
          className="input input-bordered w-full mb-2"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
        />

        <input
          className="input input-bordered w-full mb-4"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          className="input input-bordered w-full mb-4"
          name="user"
          value={property.userEmail}
          readOnly
          placeholder="Image URL"
        />
        <input
          className="input input-bordered w-full mb-4"
          name="image"
          value={property.userName}
          readOnly
          placeholder="Image URL"
        />



        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="btn btn-sm btn-outline">
            Cancel
          </button>

          <button onClick={handleUpdate} className="btn btn-sm btn-primary">
            Update
          </button>
        </div>
        <Link to='/' className='btn btn-primary px-10 w-full m-4'>Back to Home</Link>
      </div>



    </div>
  );
};



export default UpdateProperty;