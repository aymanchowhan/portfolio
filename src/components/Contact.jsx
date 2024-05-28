
import Link from 'next/link';
import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiMailAddLine } from "react-icons/ri";
import { TiLocationArrowOutline } from "react-icons/ti"
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

function Contact() {
  const data = [
    {
      icon: <IoLogoWhatsapp />,
      path: 'https://wa.me/+919867478358?text=Hey Ayman! I got your contact from your portfolio website.'
    },
    {
      icon: <FaLinkedinIn />,
      path: 'https://www.linkedin.com/in/ayman-asif-chowhan/'
    },
    {
      icon: <FiGithub  />,
      path: 'https://github.com/aymanchowhan'
    },
    {
      icon: <GrInstagram />,
      path: 'https://www.instagram.com/ayman.chowhan/'
    },
    {
      icon: <FaFacebookF />,
      path: 'https://www.facebook.com/profile.php?id=100071886902494'
    },
  ]
  return (
    <div id='contact' className='grid grid-cols-1 lg:grid-cols-3 py-20 m-auto container px-[10%] text-white'>
      <div className='col-span-1 my-auto '>
        <div className=' flex gap-2 mb-3 lg:justify-start justify-center'>
          <RiMailAddLine className='my-auto text-lg' />
          <a className='my-auto' href="mailto:aymanchowhan@gmail.com" target="_blank" rel="noopener noreferrer">aymanchowhan@gmail.com</a>
        </div>
        <div className=' flex gap-2 lg:justify-start justify-center '>
          <TiLocationArrowOutline className='my-auto text-lg' />
          <div className='my-auto'>Mumbai,India.</div>
        </div>
      </div>

      <div className="h-20 col-span-2 lg:flex mb-10 lg:mb-0">
        <div className="h-[2px] w-full lg:h-full lg:w-[2px] my-5 lg:my-0 bg-white rounded-full" />
        <div className='flex lg:gap-10 gap-3 w-full justify-center my-auto'>
        {
          data.map((item,index)=>
            <Link href={item.path} target="_blank" rel="noopener noreferrer">
              <div className='text-2xl lg:text-5xl border-2 border-white rounded-full p-3 hover:bg-white hover:text-[#00272B] duration-700'> 
              {item.icon}
              </div>
              </Link>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default Contact
 