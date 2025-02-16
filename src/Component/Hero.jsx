import React from 'react'
import Button from '@mui/material/Button';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

function Hero() {
    return (
        <section className='bg-[url("Img2.png")] md:bg-[url("Img.png")] mt-16 md:mt-20 w-full text-white pt-22 pb-20 px-4 md:px-16'>


            <div className='flex w-full '>


                {/* section left */}

                <div className='flex  flex-col justify-center items-center'>
                    <h4 className='text-[#0FF1F6] text-base md:text-2xl font-normal'>AI SDRs (aiDRs)</h4>
                    <h1 className='md:text-6xl/20 text-5xl/16 font-bold w-full md:w-sm mt-6 '>More leads, less people.</h1>
                    <p className='md:w-sm w-full text-lg md:text-xl font-light my-2'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
                    <Button variant="contained" sx={{
                        backgroundColor: ' #0FF1F6', marginTop: '8px'
                        , color: "#002228", borderRadius: "20px",
                        boxShadow: "0px 2px 20px rgba(0, 255, 246, 0.3)",
                        '&:hover': {
                            backgroundColor: '#09a07d'
                        },width:"100%",fontSize:"16px"
                    }}>Sign Up for the Beta <LaunchOutlinedIcon sx={{marginLeft:"4px",fontSize: '20px'}}/></Button>


                </div>


            

               

            </div>




        </section>
    )
}

export default Hero