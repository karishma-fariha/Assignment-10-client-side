import React from "react";
import Swal from "sweetalert2";

const PropertyCard = ({ property, onDeleteSuccess, onUpdateClick }) => {
  const { _id, name, price, location, created_at, image, category } = property;

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This property will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    const res = await fetch(`http://localhost:3000/properties/${_id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      Swal.fire("Deleted!", "Property has been removed.", "success");
      onDeleteSuccess(_id);
    }
  };

  return (
    <div className="border rounded-xl shadow-sm p-4 bg-white">
      
      <img src={image} className="w-full h-48 object-cover rounded-lg" alt="" />

      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="font-semibold">৳ {price}</p>
      <p className="text-gray-600">{location}</p>
      <p className="text-sm text-gray-400">Posted: {created_at?.slice(0, 10)}</p>

      <div className="flex gap-2 mt-4">
        <button
          className="btn btn-sm btn-warning"
          onClick={() => onUpdateClick(property)}
        >
          Update
        </button>

        <button className="btn btn-sm btn-error" onClick={handleDelete}>
          Delete
        </button>

        <a href={`/details/${_id}`} className="btn btn-sm btn-info">
          View Details
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
