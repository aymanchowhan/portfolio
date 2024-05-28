import React from 'react';

const achievements = [
  {
    title: 'Achievements',
    details: [
      'Got appreciation letter from Edera for my work on project Human Resource Management System(HRMS).',
      'Certification Course in Java Full Stack in 2023'
    ]
  },
  {
    title: <div>Non Technical <br className='hidden lg:block' /> Achievements</div>,
    details: [
      'Awarded as the Best Contingent Leader at Inter-Collegiate IT festival in 2024.',
      'PR(Public Relation) head of TechTris IT Festival in 2023-24.'
    ]
  }
];

function Achievement() {
  return (
    <div className='m-auto container text-white'>
      {
        achievements.map((item, index) => (
          <div key={index} id='about' className='grid grid-cols-1 lg:grid-cols-3 py-20 px-[10%] bg-[#00272B] h-full'>
            <div className='col-span-1 my-auto'>
              <div className='flex gap-2 mb-3 text-[22px] lg:text-[30px] justify-center'>
                {item.title}
              </div>
            </div>
            <div className="col-span-2 lg:flex w-full">
              <div className="h-[2px] w-full lg:h-full lg:w-[3px] my-5 lg:my-0 bg-white rounded-full flex" />
              <div className='text-[20px] w-full lg:ml-20 flex flex-col justify-center'>
                {item.details.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Achievement;
