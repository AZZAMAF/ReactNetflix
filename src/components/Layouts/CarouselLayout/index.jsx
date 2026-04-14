import React, { useRef } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

const CarouselLayout = ({children}) => {
  const ref = useRef(null)

  const scroll = (offset) => {
    if (ref.current) {
      ref.current.scrollLeft += offset
    }
  }

  return (
    <div className='relative group'>
      {/* Container Tombol Navigasi */}
      {/* Kita pakai pointer-events-none agar area kosong di antara tombol tidak menutupi kartu */}
      <div className='flex justify-between absolute left-0 w-full h-full pointer-events-none z-20'>
        <button 
          onClick={() => scroll(-500)}
          className='pointer-events-auto hover:bg-black/50 text-white flex items-center justify-center transition-all h-48 w-10 mt-4 bg-black/20'
        >
          <GoChevronLeft size={32}/>
        </button>
        <button
          onClick={() => scroll(500)}
          className='pointer-events-auto hover:bg-black/50 text-white flex items-center justify-center transition-all h-48 w-10 mt-4 bg-black/20'
        >
          <GoChevronRight size={32}/>
        </button>
      </div>

      {/* Bagian Carousel */}
      {/* WAJIB ada overflow-x-hidden atau overflow-x-auto supaya scrollLeft berfungsi */}
      <div 
        className='carousel relative flex scroll-smooth space-x-2 overflow-x-hidden pr-10'
        ref={ref}
      >
        {children}
      </div>
    </div>
  )
}

export default CarouselLayout