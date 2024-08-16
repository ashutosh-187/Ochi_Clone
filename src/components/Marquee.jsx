import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
    return (
            <div data-scroll data-scroll-section data-scroll-speed="-0.01" className='w-full h-screen py-20 bg-green-800 rounded-tl-3xl rounded-tr-3xl flex items-center justify-center'>

                <div className='text mt-6 border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
                    <motion.h1
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", duration: 5, repeat: Infinity }}
                        className='text-[25vw] leading-none font-["Lucida Sans Typewriter"] font-bold -mt-[4vw] -mb-[1vw] pr-[5vw] tracking-tighter leading-none'>
                        WE ARE OCHI
                    </motion.h1>
                    <motion.h1
                        initial={{ x: "0%" }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", duration: 5, repeat: Infinity, }}
                        className='text-[25vw] leading-none font-["Lucida Sans Typewriter"] font-bold -mt-[4vw] -mb-[1vw] pr-[5vw] tracking-tighter'>
                        WE ARE OCHI
                    </motion.h1>
                </div>
            </div>
    )
}

export default Marquee