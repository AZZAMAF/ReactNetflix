import React from 'react'
import EachUtils from '@/Utils/EachUtils'
import InputMembership from '@/components/Moduls/landingPage/InputMembership'
import { JUMBOTRON_IMAGE } from '@/constans/listAsset'
import { useAtom } from 'jotai'
import { languageAtom } from '@/jotai/atoms'
import { LIST_JUMBOTRON_EN, LIST_JUMBOTRON_ID } from '@/constans/listJumbotron'

const Jumbotron = () => {
    const [language] = useAtom(languageAtom)
  return (
    <div className='mb-24 px-8'>
        <img 
            src={JUMBOTRON_IMAGE} 
            alt="Jumbotron-bg"
            className='absolute opacity-60 top-0 left-0 object-cover '
        />
        <EachUtils
            of={language == "en" ? LIST_JUMBOTRON_EN :
                LIST_JUMBOTRON_ID}
            render={(item, index) => (  
        <div key={index} 
        className='relative flex flex-col justify-center 
        items-center mt-44 gap-4 text-center'>
            <h1 className='font-black text-white text-4xl'>
                {item.title}
            </h1>
            <p className='text-white text-xl'>
                {item.desc}
            </p>
            <InputMembership/>
            
        </div>
            )}
        />
    </div>
  )
}

export default Jumbotron