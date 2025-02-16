
import React from 'react'

function Branding() {

    const img =["BackHub logo.png","CableLabs logo.png","DBS logo.png","EasyEuro logo.png","AMD logo.png"]
    
  return (
 <section className='bg-[#07292F]  py-10 items-center justify-center  md:flex md:flex-col px-4 md:px-16'>

<p className='text-[#0FF1F6] text-center uppercase'>Our trusted partners</p>

<div className='md:flex md:pt-6 pt-6 mx-auto grid grid-flow-row grid-cols-2 justify-center items-center md:gap-20'>
    { img.map((img)=>(
       
            <img src={img} alt="" />
        
    ))

    }


</div>
 </section>
  )
}

export default Branding


