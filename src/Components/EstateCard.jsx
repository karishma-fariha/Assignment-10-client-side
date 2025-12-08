import React from 'react';
import { Link } from 'react-router';

const EstateCard = ({estate}) => {
     const { image, title, location, price, category, short_description, _id } = estate;
 
    return (
        <div className="shadow-lg p-4 flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-3">{title}</h2>

      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-blue-600 font-bold">৳ {price.toLocaleString()}</p>

      <p className="text-gray-600 mt-1">{short_description}</p>

      <span className="badge badge-secondary mt-2">{category}</span>

      <Link 
        to={`/properties/${_id}`} 
        className="btn btn-primary mt-4 hover:btn-secondary"
      >
        View Details
      </Link>
    </div>

    );
};

export default EstateCard;