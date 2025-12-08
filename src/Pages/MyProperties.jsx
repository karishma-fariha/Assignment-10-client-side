import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import PropertyCard from "./PropertyCard";
import UpdateProperty from "../Components/UpdateProperty";
import { Link } from "react-router";

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://home-nest-server-side.vercel.app/properties?userEmail=${user.email}`
      );
      const data = await res.json();
      setProperties(data);
      setLoading(false);
    };

    fetchData();
  }, [user?.email]);

  const handleDeleteSuccess = (id) => {
    setProperties((prev) => prev.filter((item) => item._id !== id));
  };

  const handleUpdateClick = (property) => {
    setSelectedProperty(property);
  };

  const handleUpdated = (updatedProperty) => {
    setProperties((prev) =>
      prev.map((p) => (p._id === updatedProperty._id ? updatedProperty : p))
    );
  };

  if (loading) return <div className="p-10">Loading...</div>;

  if (!properties.length)
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold text-center text-primary">You have no properties added!</h2>
        <a href="/addProperties" className="btn btn-primary mt-4">
          Add Property
        </a>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">My Properties</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((prop) => (
          <PropertyCard
            key={prop._id}
            property={prop}
            onDeleteSuccess={handleDeleteSuccess}
            onUpdateClick={handleUpdateClick}
          />
        ))}
      </div>

      {selectedProperty && (
        <UpdateProperty
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onUpdated={handleUpdated}
        />
      )}

      <div className="flex items-center justify-center p-10">
        <Link to='/' className="btn px-5 btn-primary">Back to Home</Link>
      </div>
    </div>
  );
};

export default MyProperties;
