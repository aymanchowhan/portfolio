import React from 'react';

function Education() {
  return (
    <div className='overflow-hidden m-auto container'>
      <div id='education' className='grid grid-cols-1 lg:grid-cols-3 py-10 px-[10%]'>
        <div data-aos="fade-left" className='col-span-1 my-auto'>
          <div className='flex justify-center lg:justify-start text-[36px] font-bold'>
            BSC IT
          </div>
          <div className='my-auto flex justify-center lg:justify-start text-[20px] font-medium'>Mumbai University</div>
        </div>

        <div data-aos="fade-right" className="h-32 col-span-1 lg:flex">
          <div className="h-[3px] w-full lg:h-full lg:w-[3px] my-5 lg:my-0 bg-black rounded-full" />
          <div className="w-full flex flex-col lg:ml-20 justify-center">
            <div className="flex justify-center lg:justify-start">
              R.D & S.H National College
            </div>
            <div className="flex justify-center lg:justify-start mt-2 font-[10px]">
              2024
            </div>
          </div>
        </div>
        
        <div data-aos="fade-right" className='col-span-1 my-auto'>
          <div className='flex justify-center text-[22px] font-bold'>
            CGPA- 9.26 (Average)
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className='grid grid-cols-1 lg:grid-cols-3 py-10 px-[10%] '>
        <div className='col-span-1 my-auto'>
          <div className='flex justify-center lg:justify-start text-[36px] font-bold'>
            HSC
          </div>
          <div className='my-auto flex justify-center lg:justify-start text-[20px] font-medium'>Maharashtra State Board</div>
        </div>

        <div data-aos="fade-right" className="h-32 col-span-1 lg:flex">
          <div className="h-[3px] w-full lg:h-full lg:w-[3px] my-5 lg:my-0 bg-black rounded-full" />
          <div className="w-full flex flex-col lg:ml-20 justify-center">
            <div className="flex justify-center lg:justify-start">
             Royal College
            </div>
            <div className="flex justify-center lg:justify-start mt-2 font-[10px]">
              2021
            </div>
          </div>
        </div>
        
        <div data-aos="fade-right" className='col-span-1 my-auto'>
          <div className='flex justify-center text-[22px] font-bold'>
             81.00%
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className='grid grid-cols-1 lg:grid-cols-3 py-10 px-[10%] '>
        <div className='col-span-1 my-auto'>
          <div className='flex justify-center lg:justify-start text-[36px] font-bold'>
            SSC
          </div>
          <div className='my-auto flex justify-center lg:justify-start text-[20px] font-medium'>Maharashtra State Board</div>
        </div>

        <div data-aos="fade-right" className="h-32 col-span-1 lg:flex">
          <div className="h-[3px] w-full lg:h-full lg:w-[3px] my-5 lg:my-0 bg-black rounded-full" />
          <div className="w-full flex flex-col lg:ml-20 justify-center">
            <div className="flex justify-center lg:justify-start">
              St.Xavier&apos;s High School
            </div>
            <div className="flex justify-center lg:justify-start mt-2 font-[10px]">
              2019
            </div>
          </div>
        </div>
        
        <div data-aos="fade-right" className='col-span-1 my-auto'>
          <div className='flex justify-center text-[22px] font-bold'>
             80.80%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
