import React from 'react'

import type { UseGuide } from '../types'
import Icons from '@/components/Icons'
import { colors } from '@/styles/colors'

const UseGuideItem = ({ id, desc, icon, title }: UseGuide) => {
    return (
        <div className='w-full px-4 py-6 rounded-[2px] border border-darkBlue'>
            <div className='bg-custom-conic-gradient bg-cover bg-center w-[46px] h-[46px] rounded-[2px] border-[0.5px] border-white flex justify-center items-center'>
                <Icons glyph={icon} color={colors.white[500]} />
            </div>

            <div className='mt-6 flex flex-col gap-2'>
                <p className='font-medium text-lg leading-6'>{`${id}. ${title}`}</p>
                <p className='font-normal text-base leading-6'>{desc}</p>
            </div>
        </div>
    )
}

export default UseGuideItem