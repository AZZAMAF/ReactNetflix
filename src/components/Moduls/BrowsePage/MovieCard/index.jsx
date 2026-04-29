import React, { useEffect, useState } from 'react'
import { GoChevronDown, GoPlay, GoPlusCircle } from 'react-icons/go'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { idMovieAtom, isOpenModalAtom } from '@/jotai/atoms'
import { getVideoUrl } from '@/Utils/getVideoUrl'

const MovieCard = ({ data, isHover, setIsHover }) => {
    const [idMovie, setIdMovie] = useAtom(idMovieAtom)
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)
    const [videoUrl, setVideoUrl] = useState(null)
    
    useEffect(()=>{
        getVideoUrl({movide_id: data.id}).then(result =>setVideoUrl(result))
    },[])

    console.log({videoUrl})
    return (
        <>
            {isHover && idMovie === data.id ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0, ease: "easeInOut" }}
                    className='relative shadow-md cursor-pointer transition-all w-full'>
                    <ReactPlayer
                        src={`https://youtube.com/watch?v=${videoUrl}`}
                        playing={true}
                        loop={true}
                        muted={true}
                        width={"100%"}
                        height={"180px"}
                        controls={false}
                    />
                    <div className='h-auto p-2 bg-[#141414] flex flex-col gap-1.5'>
                        <section className='mt-1 flex justify-between '>
                            <div className='flex gap-2'>
                                <button>
                                    <GoPlay size={32} />
                                </button>
                                <button>
                                    <GoPlusCircle size={32} />
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={(e) => {
                                        
                                        e.stopPropagation();
                                        console.log("Tombol diklik, state harusnya jadi true"); // Cek di console (F12)
                                        setIsOpenModal(true);
                                    }}
                                    className='rounded-full p-1 border '>
                                    <GoChevronDown size={20} />
                                </button>
                            </div>
                        </section>
                        <section className='text-left'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <p className='text-green-400'>Popularity: {data.popularity}</p>
                        </section>
                    </div>
                </motion.div>
            ) : (
                <img
                    onMouseEnter={() => {
                        setIsHover(true)
                        setIdMovie(data.id)
                    }}
                    src={`${import.meta.env.VITE_BASE_URL_TMDB_IMG}${data.poster_path}`} className='w-full max-h-48 cursor-pointer' />
            )}

        </>
    )
}

export default MovieCard