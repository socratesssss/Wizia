import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col md:flex-row md:fle justify-between md:px-16 px-4 bg-[#07292F] py-10 '>
       <div className='flex justify-center'> <img className='w-1/4 md:w-auto' src="Logo2.png" alt="" /></div>
        <p className='text-white md:mt-0 mt-4'>Copyright © 2023 Wizia. All rights reserved.</p>
    </div>
  )
}

export default Footer