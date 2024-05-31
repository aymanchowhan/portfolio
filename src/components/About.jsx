import React from 'react'

function About() {
  return (
    <div id='about' className=' overflow-hidden grid grid-cols-1 lg:grid-cols-3 py-10 lg:py-20 m-auto container px-[10%] text-white'>
      <div data-aos="fade-left" className='col-span-1 my-auto '>
        <div className=' flex lg:gap-2 mb-3 text-[36px] justify-center'>
          About
        </div>
      </div>


      <div data-aos="fade-left" className="col-span-2 lg:flex w-full">
        <div className="h-[2px] w-full lg:h-full lg:w-[2px] my-5 lg:my-0 bg-white rounded-full flex" />
        <div className='text-[20px] w-full lg:text-left text-center px-auto lg:ml-20'>
          I am actively seeking a role within a forward-thinking organization
          where I can leverage my strong technical expertise and
          unwavering enthusiasm for developing highly efficient and
          scalable software solutions. My commitment to continuous
          learning and staying abreast of emerging technologies ensures
          that I remain at the forefront of innovation in the field
        </div>
      </div>

    </div>
  )
}

export default About
