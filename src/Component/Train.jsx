import React from 'react'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';

function Train() {
    const SomeCheck = ["Quick to ramp","Quick to scale up","Easy to optimize","Works with all your existing tools"]
  return (
    <section>
    <div 
      className="md:bg-[url('Frame17.png')] md:mx-8 rounded-3xl bg-cover  items-center md:bg-center md:py-20 flex flex-col text-white p-6 bg-[url('bg.png')]"
    >
      <div className=''>
      <h3 className='md:w-3/5 md:text-4xl text-2xl font-light md:font-semibold '>Train your aiDR on your...</h3>
      <h3 className='md:w-3/5 md:text-4xl text-2xl font-light md:font-semibold italic mt-5 text-[#0FF1F6]'>preferred email st |</h3>
      <p className='md:w-3/5 text-gray-400 text-base md:text-base mt-10'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

      <div className='grid md:mt-12 mt-10 md:gap-6 gap-2 md:grid-cols-2 '>
  

        {SomeCheck.map((item)=>(
            <p className='text-[#0FF1F6]  md:text-xl'> <CheckCircleTwoToneIcon sx={{marginRight:1, marginBottom:"3px"}}/> {item}</p>
        ))}
     
      </div>
      </div>
    </div>
  </section>
  
  )
}

export default Train