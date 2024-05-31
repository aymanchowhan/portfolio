import Image from 'next/image'
import React from 'react'
import watch from '../assests/demowatchby-ayman.png';
import hrms from '../assests/hrms-edera.png';
function Projects() {
  const data = [
    {
      name: "Watch Website",
      img: watch,
      alt: 'MU PLAY OTT',
      link: 'https://demowatch-by-ayman.vercel.app/',
      logo: 'https://res.cloudinary.com/dgyudczza/image/upload/v1677216559/muplay/Muplay_cv3hsy.png',
    },
    {
      name: "HRMS",
      img: hrms,
      alt: 'Mayvent',
      link: 'https://hrms.edera.in/',
      logo: 'https://res.cloudinary.com/dgyudczza/image/upload/v1688402995/mayvent/m_nitssu.png',
    },
    {
      name: "Zezo Softwares",
      img: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669877038/AK/screencapture-zezo-vercel-app-2022-12-01-12_11_11_lvyv83.webp',
      alt: 'Zezosoft / Zezo Softwares',
      link: 'https://zezo.vercel.app/',
      logo: 'https://res.cloudinary.com/drtldr4nl/image/upload/v1669877567/AK/White_Logo_pwpqkh_f5odqw.webp',
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
