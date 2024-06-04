import React from 'react'
import img from '../assests/ayman_photo.png';
import Image from 'next/image';
import TypewriterComponent from 'typewriter-effect';
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

    <div id='home' className='overflow-hidden h-[80vh] container m-auto flex px-[8%] '>
      <div className='m-auto lg:justify-evenly lg:mb-48 mb-28 grid-cols-1 grid lg:grid-cols-2'>
        <div className='order-1 lg:order-2 col-span-1 mt-10 lg:mt-0 flex justify-center lg:justify-start w-full'>
          {/* <div className='text-center lg:text-left text-[16px]'>
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
          </div> */}
          <div className='my-auto lg:text-3xl text-2xl w-full text-center lg:text-left'>
            <div className=''>Hi, my name is </div>
            <div className='italic lg:text-7xl text-4xl font-bold lg:mb-3'>Ayman Chowhan,</div>
            <div className='lg:flex'>
              <div className='lg:mr-2 lg:mt-[10px]'>A <sapn className='font-bold'>{age}</sapn> years old</div>
              <div className="lg:text-5xl text-4xl font-semibold text-[#52657d]">
                <TypewriterComponent
                  options={{
                    strings: ['React Developer', 'Software Developer', ''],
                    autoStart: true,
                    loop: true
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=' col-span-1 flex justify-center'>

          <div className=' order-2 lg:order-1 mt-8 lg:mt-18 w-full'>
            <Image src={img} alt='Ayman Chowhan' className='w-2/3 mx-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
