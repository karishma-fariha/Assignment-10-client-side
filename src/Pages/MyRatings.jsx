import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router";

const MyRatings = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://home-nest-server-side.vercel.app/my-reviews/${user.email}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [user.email]);

  if (reviews.length === 0) {
    return <div className="p-6 text-center">You haven't added any reviews yet</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">My Ratings & Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, idx) => (
          <div key={idx} className="bg-base-200 p-4 rounded-md shadow-sm">
            <p className="font-semibold">{r.userName}</p>
            <p>Property ID: {r.propertyId}</p>
            <p>Rating: {r.rating} ⭐</p>
            <p>{r.text}</p>
            <p className="text-gray-400 text-sm">
              {new Date(r.created_at).toLocaleString()}
            </p>
          </div>
        ))}


      </div>
      <div className="flex items-center justify-center p-10">
        <Link to='/' className="btn px-5 btn-primary">Back to Home</Link>
      </div>
    </div>
  );
};

export default MyRatings;
