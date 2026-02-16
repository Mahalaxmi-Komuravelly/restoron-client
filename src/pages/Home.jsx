import React from "react";
import { Link } from "react-router-dom";

const popularDishes = [
  {
    name: "Veg Manchurian",
    price: "₹160",
    image: "https://images.pexels.com/photos/29631489/pexels-photo-29631489.jpeg",
  },
  {
    name: "Paneer Biryani",
    price: "₹250",
    image: "https://media.istockphoto.com/id/1408285691/photo/paneer-butter-masala-biryani-with-raita-served-in-a-dish-side-view-on-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=PoF6VR_ifbnYUS-eHCBEfWTSuIg4uQ0mFOoc12caQAs=",
  },
  {
    name: "Cake Chocolate",
    price: "₹230",
    image: "https://images.pexels.com/photos/18481452/pexels-photo-18481452.jpeg",
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg')] bg-cover bg-center h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl font-bold mb-4">Restoron</h1>
          <p className="text-xl mb-6">
            Authentic South Indian Flavors, Served Fresh Daily
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/menu"
              className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md font-semibold transition"
            >
              View Menu
            </Link>
            <Link
              to="/reservations"
              className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Why Choose Restoron?</h2>
        <p className="text-gray-700 text-lg">
          At Restoron, we bring the authentic taste of South India to your
          plate. From crispy starters to rich biryanis and traditional meals,
          every dish is prepared with fresh ingredients and love.
        </p>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-16 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Dishes</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {popularDishes.map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p className="text-orange-600 font-bold mt-2">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/menu"
            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md font-semibold transition"
          >
            View Full Menu
          </Link>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 px-4 text-center bg-orange-50">
        <h2 className="text-3xl font-bold mb-4">Reserve Your Table</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Planning a family dinner or special occasion? Reserve your table in
          just a few clicks and enjoy an unforgettable dining experience.
        </p>
        <Link
          to="/reservations"
          className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-md text-white font-semibold transition"
        >
          Book Now
        </Link>
      </section>

      
    </div>
  );
};

export default HomePage;
