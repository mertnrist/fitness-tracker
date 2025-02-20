import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='border-t-1 border-[#111] h-50 mt-50 p-10 flex gap-5 w-full justify-around'>
                <div className='w-[300px]'>
                    <div className='text-3xl font-bold'>Kişisel Takibim</div>
                    <p className='text-2xl text-gray-500'>Sen de kendini geliştirmek için bizimle birlikte bu serüvene katıl.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='text-[18px] font-bold'>Sayfalar</div>
                    <Link className='text-[12px] inline-flex gap-1 items-center before:p-1 before:w-[10px] before:h-[10px] before:bg-white'>Anasayfa</Link>
                    <Link className='text-[12px] inline-flex gap-1 items-center before:p-1 before:w-[10px] before:h-[10px] before:bg-white'>Hakkımizda</Link>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='text-[18px] font-bold'>Sosyal Medya</div>
                    <Link className='text-[12px] inline-flex gap-1 items-center before:p-1 before:w-[10px] before:h-[10px] before:bg-white'>Instagram</Link>
                    <Link className='text-[12px] inline-flex gap-1 items-center before:p-1 before:w-[10px] before:h-[10px] before:bg-white'>Youtube</Link>
                </div>
            </footer>
            <div className='text-center p-5 w-full border-t-1 border-[#111]'>Copyright @2025</div>
        </>
    )
}

export default Footer
