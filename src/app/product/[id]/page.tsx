import Price from '@/components/Price'
import { singleProduct } from '@/components/data'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row'>
      {/* image */}
      {singleProduct.img && (<div className='relative w-full h-1/2'>
        <Image src={singleProduct.img} alt={''} className='object-contain' fill/>
      </div>)}
      {/* text */}
      <div className='h-1/2 flex flex-col gap-4'>
        <h1 className='text-3xl font-bold uppercase'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  )
}

export default SingleProductPage