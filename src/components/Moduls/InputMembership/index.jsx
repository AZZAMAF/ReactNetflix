import React from 'react'
import EachUtils from '../../../Utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '../../../jotai/atoms'
import { LIST_CTA_EN, LIST_CTA_ID } from '../../../constans/listCTA'
import DefaultButton from '../DefaultButton'

const InputMembership = () => {
    const [language] = useAtom(languageAtom)
    return (
        <form>
            <EachUtils
                of={language == "en" ? LIST_CTA_EN : LIST_CTA_ID}
                render={(item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <div className='flex flex-col md:flex-row justify-center items-start gap-2 py-4 w-full max-w-2xl mx-auto'>

                            {/* BUNGKUS INPUT DAN LABEL DI SINI */}
                            <div className='relative w-full flex-1'>
                                <input
                                    id="email-input"
                                    placeholder=" "
                                    className='peer w-full p-4 pt-6 pb-2 bg-black/50 rounded-md border border-white/50 text-white outline-none focus:border-white transition-all'
                                />
                                <label
                                    htmlFor="email-input"
                                    className='absolute left-4 top-4 text-gray-400 transition-all duration-200
                                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                                    peer-focus:top-1 peer-focus:text-xs
                                    peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs'
                                >
                                    {item.labelInput}
                                </label>
                            </div>

                            <DefaultButton
                                onClick={() => console.log('register')}
                                text={item.buttonSubmit}
                                isArrowIcon={true}
                                styles="w-full md:w-auto py-4 px-10 text-xl font-bold flex justify-center items-center gap-2"
                            />
                        </div>
                    </div>
                )}
            />
        </form>
    )
}

export default InputMembership