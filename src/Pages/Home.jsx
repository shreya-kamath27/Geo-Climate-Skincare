import React from 'react'
import NavBar from '../Component/NavBar'
import photo from '../assets/photo.jpeg'

function Home() {
  return (
    <>
    <NavBar isLoggedIn={true}/>
    <div
  className="flex flex-col-reverse md:flex-row items-center justify-between 
  max-w-screen-xl mx-auto px-6 md:px-16 py-12 md:py-20 gap-10
  bg-[#fafafa] bg-cover bg-right bg-no-repeat"
  style={{
    backgroundImage: `url(${photo})`,
  }}
>
  
  <div className="flex-1 pr-0 md:pr-10 text-center md:text-left bg-white/70 md:bg-transparent p-4 rounded-xl md:p-0">
    <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight 
               text-gray-800 tracking-tight">
             Discover your perfect skincare routine
    </h1>
  </div>
</div>

    </>
  )
}

export default Home
