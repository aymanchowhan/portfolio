import React from 'react'

function About() {
  return (
    <div id='about' className='grid grid-cols-1 lg:grid-cols-3 py-10 lg:py-20 m-auto container px-[10%] text-white'>
      <div className='col-span-1 my-auto '>
        <div className=' flex lg:gap-2 mb-3 text-[36px] justify-center'>
          About
        </div>
      </div>


      <div className="col-span-2 lg:flex w-full">
        <div className="h-[2px] w-full lg:h-full lg:w-[2px] my-5 lg:my-0 bg-white rounded-full flex" />
        <div className='text-[20px] w-full lg:text-left text-center px-auto lg:ml-20'>
          I am an energetic, ambitious, motivated person who has developed a mature and responsible approach to any task that I undertake, or situation that I am presented.
          I am a Web Developer, Eager to obtain a challenging position at a prestigious company that will expand my learning and build upon my developer skills.
        </div>
      </div>

    </div>
  )
}

export default About
