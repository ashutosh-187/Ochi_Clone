import { motion, useAnimation} from 'framer-motion'
import React from 'react'

export default function Featured() {

    const cards = [useAnimation(), useAnimation()]

    const handleHover = (index)=>{
        cards[index].start({y:"0"})
    }

    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"})
    }

    return (
        <div data-scroll data-scroll-section className='w-full py-20 bg-zinc-950'>
            <div className='w-full px-20 border-b-[1px] border-zinc-800 pb-12'>
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>
                    Featured Projects
                </h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-5 mt-10'>

                    <motion.div
                        onHoverStart={()=>handleHover(0)}
                        onHoverEnd={()=>handleHoverEnd(0)}
                        className='cardContainer w-1/2 h-[75vh] relative'>
                        <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-["Lucida Sans Typewriter"] font-bold text-[#CDEA68] leading-none tracking-tighter'>
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    initial={{y:"100%"}}
                                    animate={cards[0]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className='innerCard w-full h-full rounded-lg overflow-hidden'>
                            <img className='w-full h-fit bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' />
                        </div>
                    </motion.div>

                    <motion.div
                        onHoverStart={()=>handleHover(1)}
                        onHoverEnd={()=>handleHoverEnd(1)}
                        className='cardContainer relative w-1/2 h-[75vh]'>
                        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-["Lucida Sans Typewriter"] font-semibold text-[#CDEA68] leading-none tracking-tighter'>
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                    initial={{y:"100%"}}
                                    animate={cards[1]}
                                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className='innerCard w-full h-full rounded-lg overflow-hidden'>
                            <img className='w-full h-fit bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' />
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
