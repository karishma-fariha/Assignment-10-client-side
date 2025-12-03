import React from "react";
import building4 from '../assets/istockphoto-4.jpg';
import building3 from '../assets/banani-2978376_1280.jpg';
import building2 from '../assets/building-4341311_1280.jpg';
import building from '../assets/architecture-7740616_1280.jpg';

const CityHighlights = () => {
  const data = [
    { title: "Gulshan", subtitle: "10 Properties Listed", img: building2 },
    { title: "Banani", subtitle: "21 Properties Listed", img: building },
    { title: "Mirpur", subtitle: "14 Properties Listed", img: building3 },
    { title: "Uttara", subtitle: "31 Properties Listed", img: building4 },
  ];

  return (
    <div className="py-20 px-10">
      <h2 className="text-5xl font-bold text-center mb-12 text-primary">
        City Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="
              relative h-[700px] overflow-hidden 
              group cursor-pointer
            "
          >
            <img
              src={item.img}
              alt={item.title}
              className="
                w-full h-full object-cover 
                transition-transform duration-500 
                group-hover:scale-110
              "
            />

            <div
              className="
                absolute inset-0 bg-black/40 
                group-hover:bg-black/60 
                transition-all duration-500
              "
            ></div>

            <div
              className="
                absolute inset-0 flex flex-col items-center justify-center 
                text-white text-center
                transition-all duration-500 
                group-hover:scale-105
              "
            >
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p className="text-lg mt-2 opacity-90">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityHighlights;
