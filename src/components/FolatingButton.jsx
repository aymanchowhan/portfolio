import React from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function FolatingButton() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Optional: Adds smooth scrolling
        });
      };
  return (
    <div className='bg-[#00272B] flex text-white rounded-full fixed h-16 w-16 lg:right-10 right-5 cursor-pointer lg:bottom-10 bottom-5 hover:bg-white duration-700 border-2 hover:border-[#00272B] border-white hover:text-[#00272B]' onClick={scrollToTop}>
      <MdOutlineKeyboardDoubleArrowUp className='text-3xl m-auto'/>
      
    </div>
  )
}

export default FolatingButton
