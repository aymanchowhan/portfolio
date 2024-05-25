import Link from 'next/link'
import React, { useState } from 'react'
import { IoLogoWhatsapp, IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";


const menu = [
  {
    name: 'Home',
    path: '/#home'
  },
  {
    name: 'About',
    path: '/#about'
  },
  {
    name: 'Skills',
    path: '/#skills'
  },
  {
    name: 'Projects',
    path: '/#projects'
  },
  {
    name: 'Experience',
    path: '/#experience'
  },

  {
    name: 'Achievement',
    path: '/#achievement'
  },
  {
    name: 'Education',
    path: '/#education'
  },
  {
    name: 'Contact',
    path: '/#contact'
  },


]
function Header() {
  const [IsOpen, setIsOpen] = useState(false)



  return (
    <div className='container m-auto relative'>
      <div className='flex h-fit justify-end gap-8 py-6 px-30  '>
        <div className='cursor-pointer' onClick={() => setIsOpen(!IsOpen)}>
          {
            IsOpen ?
              <IoMdClose className='lg:hidden text-3xl text-teal-400' />
              :
              <CgMenuRight className='lg:hidden text-3xl text-teal-400' />
          }
        </div>
        <div className='lg:block hidden'>
          <div className='flex h-full gap-8 '>
            {

              menu.map((item, index) =>
                <Link className='my-auto' key={index} href={item.path}>
                  <div className='hover:border-b border-teal-400 hover:text-teal-400'> {item.name} </div>
                </Link>
              )
            }

            <a className={`lg:block hidden`} href="https://wa.me/+919867478358?text=Hey Ayman! I got your contact from your portfolio website." target="_blank" rel="noopener noreferrer">
              <button className='bg-teal-400 hover:bg-transparent border-2 border-teal-400 hover:text-teal-400 px-10 py-3 rounded-tl-full rounded-br-full flex gap-3 duration-700' >
                <IoLogoWhatsapp className='my-auto text-3xl' />
                <span className='my-auto font-semibold'>
                  Whatsapp
                </span>
              </button>
            </a>
          </div>
        </div>
        {
          IsOpen &&
          <div className='lg:hidden absolute left-0 bg-white top-[78px] right-0 px-5 border-b-2 border-teal-400 pb-4'>
            <div className='h-full gap-8 '>
              {

                menu.map((item, index) =>
                  <Link className='my-auto' key={index} href={item.path}>
                    <div className='hover:bg-teal-400 hover:text-white px-5 rounded-lg py-2 my-2'> {item.name} </div>
                  </Link>
                )
              }

              <a className={`lg:block hidden`} href="https://wa.me/+919867478358?text=Hey Ayman! I got your contact from your portfolio website." target="_blank" rel="noopener noreferrer">
                <button className='bg-teal-400 hover:bg-transparent border-2 border-teal-400 hover:text-teal-400 px-10 py-3 rounded-tl-full rounded-br-full flex gap-3 duration-700' >
                  <IoLogoWhatsapp className='my-auto text-3xl' />
                  <span className='my-auto font-semibold'>
                    Whatsapp
                  </span>
                </button>
              </a>
            </div>
          </div>
        }

      </div>

    </div>
  )
}


export default Header
