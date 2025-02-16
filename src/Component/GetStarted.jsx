import React from 'react'
import Button from '@mui/material/Button';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
function GetStarted() {
  return (
    <section>
 <div className=' flex flex-col md:px-8 px-4 items-center justify-center  md:text-xl text-base md:py-24 py-16 text-center font-light '>
 <p className='text-[#0FF1F6]'>GET STARTED</p>
 <h1 className='text-white mt-5 md:mt-8 font-semibold text-4xl'>Embrace the <span className='font-bold'> new era of</span> outbound.</h1>
 <p className='text-gray-400 mt-5 md:w-1/2 md:mt-8 md:text-xl text-base'>Wizia lets you train, activate, and optimize aiDRs. 
 Take your outbound to new levels of performance and efficiency.</p>
 <Button  variant="contained" sx={{
                        backgroundColor: ' #0FF1F6', marginTop: 4
                        , color: "#002228", borderRadius: "20px",
                        boxShadow: "0px 2px 20px rgba(0, 255, 246, 0.3)",
                        '&:hover': {
                            backgroundColor: '#09a07d'
                        },fontSize:"16px"
                    }}>Sign Up for the Beta <LaunchOutlinedIcon sx={{marginLeft:"4px",fontSize: '20px'}}/></Button>

 </div>
         
    </section>
  )
}

export default GetStarted