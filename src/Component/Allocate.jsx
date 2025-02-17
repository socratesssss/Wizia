import React from 'react'

function Allocate() {
const ratioDetails = [
    {ratio:"32%",
        details:"Improvement in Open Rates"
    },
    {ratio:"75%",
        details:"Improvement in Ramp Time"
    },
    {ratio:"35%",
        details:"Improvement in Meetings Booked"
    }
]


  return (
    <section className='bg-[#07292f]    rounded-3xl  md:mx-8 mx-4 '>
        <div className='md:bg-[url("/Frame18.png")] rounded-3xl bg-[url("/bg1.png")] md:py-20 py-10 bg-no-repeat bg-contain bg-right-bottom'>

<div className=' md:mx-8 mx-4'>
    <h1 className='md:w-[500px] md:text-[32px]  text-[28px] font-semibold text-white'>Allocate effort where your reps make an inpact.</h1>
    <h1 className='md:w-[500px]  mt-3 md:text-[32px] text-[24px] italic font-medium text-[#0FF1F6]'>Let us handle the rest.</h1>
    <p className='font-light md:w-[600px] mt-3 text-gray-300 md:text-xl text-lg'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>

</div>

<div className='flex md:flex-row flex-col md:mx-8 mx-4 md:mt-14 rounded-3xl '>

    {ratioDetails.map((info)=>(

        <div className='md:w-[190px] mt-10 md:mt-0'>
            <h3 className='font-bold text-[40px] text-[#0FF1F6]
            '>{info.ratio}</h3>
            <p className='text-gray-300 md:mt-2 font-medium text-xl'>{info.details}</p>
        </div>
    ))

    }


</div>



</div>
    </section>
  )
}

export default Allocate