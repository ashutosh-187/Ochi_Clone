import React from 'react'
import {motion} from 'framer-motion'
import { LuArrowUpRight } from "react-icons/lu";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = "-.2" className='w-full h-screen bg-zinc-950 pt-1'>

      <div className='textstructure mt-52 px-20'>
        {
          ["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
            return (
              <div className='masker'>

                <div className='w-fit flex items-end justify-center overflow-hidden'>
                  {
                    index === 1 && (
                      <motion.div
                        initial={{width: 0}}
                        animate={{width: "9vw"}}
                        transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                        className='w-[9vw] h-[5.6vw] rounded-xl relative mb-1 mr-1 overflow-hidden'>
                          <img 
                            src='https://i.pinimg.com/564x/95/88/84/958884112e85c90b20f28489aa793587.jpg'
                            className='w-full h-full'
                          />
                      </motion.div>
                    )
                  }
                  <h1 className='font-["Test_Founders_Grotesk_X_Condensed"] text-[9vw] leading-[7vw] flex items-center'>
                    {item}
                  </h1>
                </div>

              </div>
            )
          })
        }
      </div>

      <div className='border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center px-20 py-5'>
        {
          ["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
            <p className='text-lg font-light tracking-tight leading-none'>
              {item}
            </p>)
        }

        <div className='start flex items-center gap-3'>

          <div className='px-5 py-2 border-[2px] border-zinc-600 rounded-full font-light text-md uppercase hover:bg-zinc-300 hover:text-black'>
            Start the project
          </div>

          <div className='text-2xl font-extralight w-10 h-10 border-[2px] border-zinc-600 rounded-full flex items-center justify-center'>
            <LuArrowUpRight />
          </div>

        </div>

      </div>

    </div>
  )
}

export default LandingPage