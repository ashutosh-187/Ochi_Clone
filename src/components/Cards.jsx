import React from 'react'

function Cards() {
    return (
        <div className='flex items-center justify-center px-32 gap-5 w-full h-[650px] bg-zinc-950 border-t-[1px] border-b-[1px] border-zinc-700'>
            <div className='cardContainer h-[50vh] w-1/2'>
                <div className='card relative w-full h-full rounded-xl bg-[#004D43]'>
                    <img className='absolute left-[40%] top-[40%]' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />
                    <button className='absolute border-2 rounded-l-3xl rounded-r-3xl left-10 bottom-10 px-4 py-2 border-[#CDEA68] text-[#CDEA68] font-["Neue_Montreal"] hover:bg-[#b2d33d] hover:text-zinc-800'>
                        @2019-2022
                    </button>
                </div>
            </div>

            <div className='w-1/2 h-[50vh] bg-zinc-950 flex gap-5'>

                <div className='relative w-1/2 h-full bg-[#212121] rounded-xl'>
                    <img className='absolute top-[40%] left-[35%]' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' />
                    <button className='absolute left-10 bottom-10 border-2 rounded-l-3xl rounded-r-3xl px-4 py-2 border-zinc-300 text-zinc-300 font-["Neue_Montreal"] hover:bg-zinc-950'>
                        RATING 5.0 ON CLUTCH
                    </button>
                </div>
                <div className='relative w-1/2 h-full bg-[#212121] rounded-xl'>
                    <img className='absolute top-[30%] left-[30%] w-[150px] h-[150px]' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' />
                    <button className='absolute left-10 bottom-10 border-2 rounded-l-3xl rounded-r-3xl px-4 py-2 border-zinc-300 text-zinc-300 font-["Neue_Montreal"] hover:bg-zinc-950'>
                        BUSINESS BOOTCAMP ALUMNI
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Cards