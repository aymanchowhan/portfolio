import Image from 'next/image'
import React from 'react'
import watch from '../assests/demowatchby-ayman.png';
import hrms from '../assests/hrms-edera.png';
import cobuild from '../assests/cobuild.png';
function Projects() {
  const data = [
    {
      name: "Watch",
      img: watch,
      alt: '',
      link: 'https://demowatch-by-ayman.vercel.app/',
      
    },
    {
      name: "Human Resource Management System",
      img: hrms,
      alt: 'HRMS',
      link: 'https://hrms.edera.in/',
     
    },
    {
      name: "CoBuild",
      img: cobuild,
      alt: 'CoBuild',
      link: 'https://democonstruction-by-ayman.vercel.app/',
      
    },


  ]
  return (
    <div id='projects' className='overflow-hidden m-auto container px-[10%] text-white py-20'>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {
          data.map((item, index) =>
            <div key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className='relative h-56 rounded-xl hover:border-2 overflow-hidden'>
                  <div key={index} className="image-wrap">
                    <Image
                      src={item.img}
                      objectFit='cover'
                      alt=''
                      layout='fill'
                    />
                  </div>
                </div>
                <div className='text-center'>
                  {item.name}
                </div>
              </a>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Projects
