import { LIST_VIDEOS } from '@/constans/dummyVideo'
import React, { useState } from 'react'
import MovieCard from '../MovieCard'
import CarouselLayout from '@/components/Layouts/CarouselLayout'
import { useAtom } from 'jotai'
import { idMovieAtom } from '@/jotai/atoms'
import EachUtils from '@/Utils/EachUtils'

const MovieList = ({title}) => {
  const [isHover, setIsHover] = useState(false)
  const [, setIdMovie] = useAtom(idMovieAtom)
  return (
    <section className='px-8 py-4'>
        <h3 className='text-2xl font-semibold mb-2'>{title}</h3>
        <CarouselLayout>
            <EachUtils
              of={LIST_VIDEOS}
              render={(item, index) => (
                <div 
                  className='carousel-item h-72 w-1/4 mt-4 shrink-0'
                  key={index}
                  onMouseLeave={()=>{
                    setIsHover(false)
                    setIdMovie(null )
                  }}
                >
                  <MovieCard 
                    data={item} 
                    isHover={isHover} 
                    setIsHover={setIsHover} />
                </div>
              )}
            />
        </CarouselLayout>
    </section>
  )
}

export default MovieList