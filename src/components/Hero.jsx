import React from 'react'
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

    <div id='home' className='h-[80vh] container m-auto flex px-[10%]'>
      <div className='m-auto lg:justify-start lg:mx-0 lg:mb-48 mb-28'>
        <div className='text-center lg:text-left text-[16px]'>
          Hi, my name is 
        </div>
        <div className='text-center lg:text-left text-[30px] lg:text-[70px] '>
          AYMAN CHOWHAN
        </div>
        <div className='text-center lg:text-left text-[22px] lg:text-[36px]'>
          I build things for the web.
        </div>
        {/* <div className='text-[16px] lg:text-[22px] '>
          Web Developer
        </div> */}
        <div className=' text-center lg:text-left text-[16px] '>
          Age: {age}
        </div>
        </div>
    </div>
  )
}

export default Hero
