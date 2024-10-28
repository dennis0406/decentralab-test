import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center flex-col items-center py-6 gap-[10px] bg-gray500 mx-4 mb-4'>
            <p className='text-lg font-bold leading-6'>Apply <Link href={'/copinAffiliate'} className='bg-gradient-to-r from-blue900 via-70% via-blue300 to-purple800 text-transparent bg-clip-text'>Copin Affiliate Program</Link> to get</p>
            <p className='text-lg font-bold leading-6'> more benefits!</p>
            <Link href={'/contactUs'} className='text-blueStroke text-base font-semibold leading-6'>Contact Us</Link>
        </div>
    )
}

export default Footer