import React, { useEffect, useState } from 'react'
import api from "../api/api.js";
import MenuCard from '../components/MenuCard.jsx';
const Menu = () => {
const [menu,setMenu] = useState([]);
const [loading,setLoading] = useState(true)
 useEffect(()=>{
    api.get("/api/menu")
    .then(res => setMenu(res.data.data))
    .catch(err => console.error(err))
    .finally(() => setLoading(false));
 },[]);
 if(loading) return <p className='text-center text-lg mt-10'>Loading menu...</p>
  return (
    <div>
      <h2 className='text-4xl font-bold text-center py-6'>Our Menu</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-8'>
        {menu.map(item => (
            <MenuCard key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Menu
