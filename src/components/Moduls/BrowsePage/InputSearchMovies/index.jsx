import React, { useState } from 'react'
import{GoSearch} from "react-icons/go"
import {motion} from "framer-motion"

const InputSearchMovies = () => {
    const [isShow, setIsShow] = useState(false)
  return (
    <div className='relative flex items-center'>
            {/* Icon ditaruh di atas input secara absolut */}
            <GoSearch 
                onClick={() => setIsShow(!isShow)}
                className='absolute left-3 z-20 cursor-pointer' 
                size={22}
            />
            
            <motion.input 
                // Animasi melebar (width) dan muncul (opacity)
                initial={{ width: 0, opacity: 0 }}
                animate={{ 
                    width: isShow ? 250 : 0, 
                    opacity: isShow ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
                className='bg-black border border-white text-white py-1.5 pl-10 outline-none'
                placeholder='Titles, people, genres...'
            />
        </div>
  )
}

export default InputSearchMovies