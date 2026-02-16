import React from 'react'
import ReservationForm from '../components/ReservationForm'

const Reservation = () => {
  return (
    <div>
      <h2 className='text-3xl text-center font-bold text-gray-800 mb-6 mt-3'>Reserve a Table</h2>
      <ReservationForm />
    </div>
  )
}

export default Reservation
