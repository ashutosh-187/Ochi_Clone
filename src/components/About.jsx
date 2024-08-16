import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.01" className='bg-zinc-950'>

      <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>

        <h1 className='text-black font-["Neue_Montreal"] text-[4vw] p-20 leading-[4.5vw] tracking-normal -mt-24 font-light'>
          Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>

        <div className='border-t-[1px] border-b-[1px] border-[#99ad53] flex gap-5'>

          <div className='w-1/2'>
            <h1 className='items-start px-20 py-5 text-black font-["Neue_Montreal"] font-thin text-2xl'>
              What you can expect:
            </h1>
          </div>

          <dev className='w-1/2 mr-8'>
            <h1 className='items-center justify-center flex px-20 py-5 text-black font-["Neue_Montreal"] font-thin text-2xl w-[30vw]'>
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
            </h1>
            <h1 className='items-end px-20 py-5 text-black font-["Neue_Montreal"] font-thin text-2xl w-[30vw]'>
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
            </h1>
          </dev>

        </div>

        <div className='flex gap-5 py-12'>

          <div className='w-1/2'>
            <h1 className='text-7xl px-20 text-black font-["Neue_Montreal"] mb-7'>
              Our approach:
            </h1>
            <button className='ml-20 px-5 py-5 flex gap-4 items-center justify-center rounded-full text-white bg-zinc-800 hover:bg-black'>
              READ MORE
              <div className='w-3 h-3 bg-zinc-50 rounded-full'></div>
            </button>
          </div>
          <div className='w-[40vw] h-[60vh] rounded-3xl items-center justify-center overflow-hidden'>
            <img
              src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg'
              className='w-[40vw] h-full'
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default About