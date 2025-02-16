import React from 'react'

function Blog() {
    const BlogInfo = [
        {
            img: "Group.png",
            title: "You’re in Control",
            description: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",

        },
        {
            img: "Vector2.png",
            title: "Infinitely Scalable",
            description: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",

        },
        {
            img: "Vector.png",
            title: "Incredibly Flexible",
            description: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",

        }
    ]
    return (
        <section className='md:px-16 py-18 md:py-20 px-4 '>

            <div className='md:grid gap-10  flex flex-col md:grid-cols-3 mx-6 md:mx-0 '>
                {
                    BlogInfo.map((info) => (
                        <div className="flex flex-col  items-start gap-4">
                            <div>
                                <img className="w-10 md:w-16" src={info.img} alt="Icon" />

                            </div>
                            <div className="text-white md:mt-0">
                                <h4 className="text-lg md:text-2xl font-semibold">{info.title}</h4>
                                <p className="md:mt-2 mt-3 md:text-xl text-md font-thin">
                                    {info.description}
                                </p>
                            </div>


                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Blog