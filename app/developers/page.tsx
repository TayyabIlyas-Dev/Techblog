import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const page = () => {
  return (
    <div>
      <div className='text-center h-[80vh] mt-56'>
       <div className='flex justify-center items-center'>
       <h1 className='text-3xl font-bold m-6 text-blue-500'>Tayyab Ilyas</h1>
       <Button className='hover:bg-slate-200 hover:text-black font-semibold'><Link href='https://portfolio-tayyab-ilyas.netlify.app/'target="_blank" rel="noopener noreferrer">Portfolio</Link></Button>
       </div>
       
       <div className='flex justify-center items-center'>
       <h1 className='text-3xl font-bold m-6 text-blue-500'>Taha Shabbir </h1>
       <Button className='hover:bg-slate-200 hover:text-black font-semibold'><Link href='https://taha-shabbir-portfolio.vercel.app/' target="_blank" rel="noopener noreferrer">Portfolio</Link></Button>
       </div>
      </div>
    </div>
  )
}

export default page
