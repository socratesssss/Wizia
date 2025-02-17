import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SlideContent() {
  const content = [
    { id:1,
      space:"Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name:"John Doe",
      identy:"  Chief Strategy Officer @ Company"
    },
    {
      id:2,
      space:"For some reason, I find the history of Genghis Kahn particularly interesting ",
      name:"Elon Musk",
      identy:"  CEO of Tesla Motors"
    },
    {
      id:3,
      space:"'Most people didn't want to learn how to use a computer ; they just wanted to use it.' — Steve Jobs, 1990",
      name:"Steve Jobs",
      identy:" Former CEO of Apple"
    },
    {
      id:4,
      space:"Some memories stick with you forever. Others follow you around the internet for 28 years. Happy birthday, @Windows.",
      name:"Bill Gates",
      identy:" Former CEO of Microsoft"
    },
    

  ]
  const [index, setIndex] = useState(0);
  const {space,name,identy} = content[index];

 
  const preContent = ()=>{
    setIndex((prevIndex)=>( prevIndex === 0 ? content.length -1: prevIndex - 1 

    ))
   
  }
  const nextContent = ()=>{
    setIndex((prevIndex)=>( prevIndex === content.length -1 ? 0 : prevIndex + 1 

    ))

  }


  return (
    <section className='md:px-16 py-18 md:py-20 px-4'>
      <div className='grid grid-cols-12 items-center justify-center text-white'>
        {/* previus */}
        <div onClick={preContent} className='col-span-1 flex justify-center'>
          <ArrowBackIcon sx={{ fontSize: {xs:30, sm:40}  }} />
        </div>
        {/* content */}
        <div className='col-span-10 flex flex-col justify-center items-center '>
          <img className='w-16' src="Group 9.png" alt="" />
         
         
          <div className='flex flex-col justify-center items-center'>
            <h2 className='font-light md:mt-12 text-center mt-6 text-xl md:text-3xl'>{space}</h2>
<p className='text-[#0FF1F6] md:text-2xl md:mt-10 mt-6 font-bold'>{name}</p>
<p className='text-gray-300 mt-2 md:text-xl '>
  {identy}</p>


          </div>
      

         
        </div>
        {/* ?next */}
        <div onClick={nextContent} className='col-span-1 flex justify-center'>
          <ArrowForwardIcon sx={{fontSize: {xs:30, sm:40} }} />
        </div>


      </div>




    </section>
  )
}

export default SlideContent


