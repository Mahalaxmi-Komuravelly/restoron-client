import React from 'react'
import { useState } from 'react';
import api from "../api/api.js";
const ReservationForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
 const [isSuccess,setIsSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await api.post("/api/reservations", formData);
      setIsSuccess(true)
      setMessage(response.data.message);
      setFormData({
        name: "",
        email: "",
        date: "",
        guests: "",
        message: ""
      });

      setTimeout(() => {
        setIsSuccess(false)
        setMessage("")
      },4000);
    } catch (error) {
      setIsSuccess(false);
      const backendMessage = error.response?.data?.message;

      setMessage(
        backendMessage || "Error submitting reservation. Please try again!"
      );

      console.error("Reservation error:", error.response.data.message);
    }
    finally {
      setLoading(false);
    }
  }


  return (
    <div className='flex items-center justify-center min-h-full px-4'>
      <div className='w-full bg-white rounded-xl max-w-md shadow-lg p-8'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input type="text" placeholder='Enter Your Name' name='name' value={formData.name} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-orange-400 outline-none"
          />
          <br />
          <input type="email" placeholder='Enter Your Email' name='email' value={formData.email} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-orange-400 outline-none"
          /><br />
          <input type="date" placeholder='Enter Date' name='date' value={formData.date} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-orange-400 outline-none"
          /><br />
          <input type="number" placeholder='Enter Number of guests' name='guests' value={formData.guests} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-orange-400 outline-none"
          /><br />
          <textarea placeholder='Add text here...' name='message' value={formData.message} onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-orange-400 outline-none"
          /><br />
          <button type='submit' className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition" disabled={loading}>
            {loading ? "Booking..." : "Book Table"}</button>
          {message && (
            <p className={`text-center text-md text-bold mt-3 
            ${isSuccess ? "text-green-600" :" text-red-600"}`}>
              {message}
            </p>
          )}

        </form>
      </div>
    </div>
  )
}

export default ReservationForm
