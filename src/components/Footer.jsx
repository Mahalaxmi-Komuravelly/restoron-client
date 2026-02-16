import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 mt-10'>
        <div className='border-t text-sm text-center border-gray-700 py-4'>
      &copy;{new Date().getFullYear()} Restoron. All rights reserved.
    </div>
    </footer>
  )
}

export default Footer
