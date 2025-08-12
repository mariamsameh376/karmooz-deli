import React from 'react';
import { Link } from 'react-router-dom';

const MenuSection = () => {
  const egyptianDishes = [
    {
      name: "ALEXANDRIAN HAWAWSHI",
      image: "/assets/hauwashi-rte.png",
      price: "$15.99"
    },
    {
      name: "BABA GHANOUJ",
      image: "/assets/food3.png",
      price: "$5.99"
    },
    {
      name: "CHICKEN SHESH",
      image: "/assets/food6.png",
      price: "$14.99"
    }

  ];

  return (
    <div className="font-sans max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">HOT EGYPTIAN MEALS</h2>
        <p className="text-lg max-w-2xl mx-auto">
          We've got you covered with authentic flavors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {egyptianDishes.map((dish, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={dish.image} 
                alt={dish.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-[#DD8E3E]">{dish.name}</h3>
                <span className="bg-[#DD8E3E] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {dish.price}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{dish.description}</p>

            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link 
          to="/Menu"
          className="inline-block bg-[#DD8E3E] hover:bg-[#DD8E3E] text-white px-8 py-3 rounded-full font-bold text-lg transition-colors"
        >
          View Our Full Menu
        </Link>
      </div>
    </div>
  );
};

export default MenuSection;
