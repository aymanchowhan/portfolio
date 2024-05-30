import React from 'react'

function Experience() {
  return (
    <div id='experience' className='overflow-hidden container m-auto'>
      <div id='experience' className='grid grid-cols-1 lg:grid-cols-3 py-20 m-auto container px-[10%] '>
        <div data-aos="fade-left" className='col-span-1 my-auto '>
          <div className=' flex  justify-center text-[36px] font-bold hover:underline'>
            Edera Pvt.Ltd.
          </div>    
            <div className='my-auto flex  justify-center text-[20px] font-medium'>(17 Jul 2023 - 20 Apr 2024)</div>
         
        </div>

        <div data-aos="fade-right" className="h-32 col-span-2 lg:flex">
  <div className="h-[3px] w-full lg:h-full lg:w-[3px] my-5 lg:my-0 bg-black rounded-full" />
  <div className="w-full flex flex-col lg:ml-20 justify-center">
    <div  className="flex justify-center lg:justify-start hover:underline">
      Designation: Web Developer
    </div>
    <div className="flex text-center lg:text-left justify-center lg:justify-start mt-2">
      Learning and developing coding skills with internet and senior web developer guidance.
    </div>
  </div>
</div>

        </div>
      </div>
     
      )
}

      export default Experience
