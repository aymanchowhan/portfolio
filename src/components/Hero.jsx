import React from 'react'
import img from '../assests/ayman_photo.png';
import Image from 'next/image';
// function calculateAge(dob) {
//   const dobDate=new Date(dob) //Convert DOB in js at store in the variable dobDate
// const currentDate=new Date() //Stores today date 
// let age= currentDate.getFullYear()-dobDate.getFullYear()
// if (currentDate.getMonth() < dobDate.getMonth() || (currentDate.getMonth() === dobDate.getMonth()&& currentDate.getDate() < dobDate.getDate()))  
// {
//   age--;
// }
// return age;
// }
function calculateAge(dob) {
  const dobDate = new Date(dob);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - dobDate.getFullYear();

  // Check if the birthday hasn't occurred yet in the current year
  if (currentDate.getMonth() < dobDate.getMonth() ||
    (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
    age--;
  }

  return age;
}
function Hero() {

  const dob = new Date(2003, 8, 21); // Year, month (0-indexed), day
  const age = calculateAge(dob);
  return (

    <div id='home' className='h-[80vh] container m-auto flex px-[10%] '>
      <div className='m-auto lg:justify-start lg:mx-0 lg:mb-48 mb-28 grid-cols-1 grid lg:grid-cols-2'>
        <div className='order-1 lg:order-2 col-span-1 mt-10 lg:mt-44 flex justify-center lg:justify-start'>
          <div className='text-center lg:text-left text-[16px]'>
            Hi, my name is
            <div data-aos="fade-up" className='text-center lg:text-left text-[30px] lg:text-[70px] '>
              AYMAN CHOWHAN
              <div className='text-center lg:text-left text-[22px] lg:text-[36px]'>
                I build things for the web.
                <div className=' text-center lg:text-left text-[16px] '>
                  Age: {age}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' col-span-1 flex justify-center'>

        <div className=' order-2 lg:order-1 lg:w-fit my-auto flex justify-center lg:justify-end mt-8 lg:mt-18 mr-12'>
          <Image src={img} alt='Ayman Chowhan' className='w-96 h-4/5 ' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
