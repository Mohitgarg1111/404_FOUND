import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

function LandingPage() {
    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-52 px-20'>

                {["Nail Down", "Your Midnight", "Cravings"].map((item, index) => {
                    return <div className='masker'>

                        <div className='w-fit flex items-end overflow-hidden'>

                            {index === 1 &&
                                (<motion.div

                                    initial={{ width: 0 }}
                                    animate={{ width: "9vw" }}
                                    transition={{ ease: [0.76, 0, 0.24, 1],duration:1 }}

                                    className='mr-[1vw] w-[9vw] h-[5.5vw] rounded-md relative 
                                        -top-[.25vw]  bg-red-600'>

                                </motion.div>)}

                            <h1 className='uppercase leading-[6vw] tracking-tighter font-[Founders_Grotesk]
                            text-[7vw]'>{item}</h1>

                        </div>
                    </div>
                })}

            </div>

            <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>

                {["Free of cost deployment","24/7 Service & Availability"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}


                <div className='start flex items-center gap-5'>

                    <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase'>Start Fresh</div>

                    <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LandingPage

