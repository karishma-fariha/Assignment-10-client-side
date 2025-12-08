import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const PropertyDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // property id from URL
  const [property, setProperty] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  // Fetch property details
  useEffect(() => {
    fetch(`https://home-nest-server-side.vercel.app/properties/${id}`)
      .then(res => res.json())
      .then(data => setProperty(data));
  }, [id]);

  // Fetch reviews for this property
  useEffect(() => {
    fetch(`https://home-nest-server-side.vercel.app/reviews/${id}`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [id]);

  const handleAddReview = async () => {
    if (!text) return toast("Review text is required");

    const reviewData = {
      propertyId: id,
      userEmail: user.email,
      userName: user.displayName,
      rating: Number(rating),
      text,
    };

    try {
      const res = await fetch("https://home-nest-server-side.vercel.app/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });
      const data = await res.json();
      if (data.insertedId) {
        toast.success("Review submitted!");
        setReviews(prev => [reviewData, ...prev]);
        setText("");
        setRating(5);
      }
    } catch (err) {
      console.log(err);
      toast("Failed to submit review");
    }
  };

  if (!property) return <div>Loading property...</div>;

  return (
    <div className="">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="bg-base-200 mx-auto p-6 flex items-center gap-5">
        {/* Property Info */}
        <img
          src={property.image}
          alt={property.name}
          className="w-xl h-96 object-cover rounded-md mb-4"
        />
        <div className="">
          <h1 className="text-3xl font-bold">{property.name}</h1>
          <p className="text-gray-600">{property.category}</p>
          <p className="text-xl font-semibold">৳{property.price}</p>
          <p>{property.location}</p>
          <p>{property.description}</p>
          <p className="text-gray-400 text-sm">
            Posted on: {new Date(property.created_at).toLocaleString()}
          </p>
          <p className="text-gray-500">
            Posted by: {property.userName} ({property.userEmail})
          </p>

          {/* Ratings & Reviews Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Ratings & Reviews</h2>

            {/* Add a review */}
            <div className="mb-6 border p-4 rounded-md">
              <h3 className="font-semibold mb-2">Add Your Review</h3>
              <label className="block mb-1">Rating (1-5)</label>
              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={e => setRating(e.target.value)}
                className="input w-20 mb-2"
              />
              <textarea
                placeholder="Write your review..."
                value={text}
                onChange={e => setText(e.target.value)}
                className="textarea w-full mb-2"
              />
              <button
                onClick={handleAddReview}
                className="btn btn-primary"
              >
                Submit Review
              </button>
            </div>

            {/* List of reviews */}
            {reviews.length === 0 ? (
              <p>No reviews yet</p>
            ) : (
              reviews.map((r, idx) => (
                <div
                  key={idx}
                  className="border p-4 rounded-md mb-3"
                >
                  <p className="font-semibold">{r.userName}</p>
                  <p>Rating: {r.rating} ⭐</p>
                  <p>{r.text}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(r.created_at).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default PropertyDetails;
