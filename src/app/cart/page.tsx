"use client"
import Image from 'next/image'
import React from 'react'
import img from '../../../public/temporary/p1.png'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-red-500'>
      {/* products */}
      <div className='"h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40"'>
      {/* single item */}
        <div className=' flex items-center justify-between mb-4'>
          <Image src={img} alt={'img'} width={100} height={100}/>
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <span>large</span>
          </div>
          <h2 className='font-bold'>$7</h2>
          <span className='cursor-pointer'>x</span>
        </div>
      </div>
      {/* payment */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className='flex justify-between'>
          <span className=''>subtotal</span>
          <span className=''>$8</span>
        </div>

        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>

        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>

        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end uppercase">checkout</button>
      </div>
    </div>
  )
}

export default CartPage