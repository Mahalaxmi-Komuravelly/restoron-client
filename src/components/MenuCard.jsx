import React from 'react'

const MenuCard = ({item}) => {
  return (
    <div className="rounded-xl shadow-lg hover:shadow-lg transform overflow-hidden hover:scale-105 transition p-4 flex flex-col h-full text-center">
      <img src={item.image} alt={item.name} className="h-48 w-full object-cover rounded mb-4"/>
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p className="text-gray-700">{item.category}</p>
      <p className="mt-2 text-orange-600 font-bold">₹{item.price.toFixed(2)}</p>
    </div>
  )
}

export default MenuCard
