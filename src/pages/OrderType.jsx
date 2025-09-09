import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryModal from "../components/DeliveryModal";
import { Link } from "react-router-dom";

export default function OrderType() {
  const navigate = useNavigate();
  const [showDeliveryModal, setShowDeliveryModal] = useState(false); // ✅ لازم تعريف state

  const handlePickUp = () => {
    navigate('/order/menu?type=pickup');
  };

  const handleDelivery = () => {
    setShowDeliveryModal(true); // ✅ عرض المودال بدل التنقل المباشر
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 🔲 Black Bar */}
      <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
  <Link to="/" className="text-2xl font-bold tracking-wide">
   Karmooz Deli
  </Link>
</div>

      {/* 🖼️ Hero Image */}
      <div className="relative">
        <img
          src="/images/hero.png"
          alt="Hero"
          className="w-full h-72 object-cover"
        />
      </div>
      {/* 📍 Map + PickUp/Delivery Section */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-8 shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Map */}
        <div className="w-full md:w-1/2 h-80 md:h-auto">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.1936261916294!2d-86.80496898898583!3d36.16184260330906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886467674f9e6a91%3A0x9ed36a27636760ad!2sMidtown%20Foods!5e0!3m2!1sen!2seg!4v1757409665805!5m2!1sen!2seg&language=en&region=US"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Info & Buttons */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Order Online</h2>
            <p className="text-gray-600 mb-6">Choose how you’d like to get your food.</p>

            <a
  href="https://midtownfoodsnsh.com/s/karmooz-deli/614-18th-ave-n-nashville/a2d2b0a6-e684-4ff1-91bb-ee960dde2143
"
  target="_blank"     // يفتح في تبويب جديد
  rel="noopener noreferrer"
  className="w-full block text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded"
>
  Pick Up
</a>
<a
  href="https://www.ubereats.com/store/karmooz-deli/6aROvhgZXwq9jMs6OIIwPA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk5hc2h2aWxsZSUyMEFpcnBvcnQlMjBNYXJyaW90dCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMjgwZGJlNDAxLWI1YzItM2Q5ZS04OWQ5LTA4NGJhZDY1MWI3ZiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzYuMTUzOTQxJTJDJTIybG9uZ2l0dWRlJTIyJTNBLTg2LjY5MDIzMiU3RA%3D%3D&utm_source=menu-maker"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded"
>
  Delivery
</a>


            {/* ✅ Delivery Modal */}
            <DeliveryModal
              isOpen={showDeliveryModal}
              onClose={() => setShowDeliveryModal(false)}
            />
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Address: <br />
              <span className="font-semibold">614 18th Ave N,Nashville,TN 37203</span>
            </p>
          </div>
        </div>
      </div>

      {/* ⭐ Popular Items */}
      <div className="mt-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Popular Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className="bg-white rounded-lg shadow p-4">
          <img
        src="/assets/KarmoozDeli_SmokedSupremeFold_2880x2304.jpg"
        alt="SMOKED SUPREME"
        className="w-full h-40 object-cover rounded-md mb-3"
      />
            <h4 className="text-lg font-semibold">SMOKED SUPREME</h4>
            <p className="text-sm text-gray-600">
            Pepperoni, Mortadella, Turkey, Tomatoes, Green pepper, Olives, Ricotta, Mozzarella.
            </p>
            <span className="text-red-600 font-bold block mt-1">$18.99</span>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-lg shadow p-4">
          <img
        src="/assets/KarmoozDeli_AlexandrianHawawshiFold_2880x2304.jpg"
        alt="ALEXANDRIAN HAWAWSHIh"
        className="w-full h-40 object-cover rounded-md mb-3"
      />
            <h4 className="text-lg font-semibold">ALEXANDRIAN HAWAWSHIh</h4>
            <p className="text-sm text-gray-600">
            Ground beef and Lamb Mix, Mozzarella.
            </p>
            <span className="text-red-600 font-bold block mt-1">$18.99</span>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-lg shadow p-4">
          <img
        src="/assets/KarmoozDeli_TheDuoFold_2880x2304.jpg"
        alt="THE DUO"
        className="w-full h-40 object-cover rounded-md mb-3"
      />
            <h4 className="text-lg font-semibold">THE DUO</h4>
            <p className="text-sm text-gray-600">
            Pastrami, Sogo’, Tomatoes, Green pepper, Olives, Ricotta, Mozzarella.
            </p>
            <span className="text-red-600 font-bold block mt-1">$18.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}
