import React from 'react'

import Icons from '../Icons'

import { colors } from '@/styles/colors'
import { USE_GUIDES } from './constants'
import type { UseGuide } from './types'
import UseGuideItem from './UseGuideItem'

const UseGuide = () => {
  return (
    <div className='p-4'>
      <div className="flex gap-2">
        <Icons glyph='lightbulbFilament' color={colors.gray[900]} />
        <span className='font-medium text-lg'>How It Works?</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
        {USE_GUIDES.map((item: UseGuide) => (
          <UseGuideItem key={item.id.toString()} {...item} />
        ))}
      </div>
    </div>
  )
}

export default UseGuide