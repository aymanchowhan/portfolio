import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Achievement from '@/components/Achievement'

function index() {
  return (
    <>
      <Header />
      <Hero />

      <div className='bg-[#52657d]'>
        <About />
      </div>

      <Skills />

      <div className='bg-[#52657d]'>
        <Projects />
      </div>

      <Experience />

      <div className='bg-[#52657d]'>
        <Achievement />
      </div>


        <Education />
  
      <div className='bg-[#52657d]'>
        <Contact />
      </div>
    </>
  )
}

export default index
