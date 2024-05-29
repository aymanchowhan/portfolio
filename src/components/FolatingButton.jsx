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
    <div className='bg-[#52657d] flex text-white rounded-full fixed h-16 w-16 lg:right-10 right-5 cursor-pointer lg:bottom-10 bottom-5 hover:bg-white duration-700 border-2 hover:border-[#52657d] border-white hover:text-[#52657d]' onClick={scrollToTop}>
      <MdOutlineKeyboardDoubleArrowUp className='text-3xl m-auto'/>
      
    </div>
  )
}

export default FolatingButton
