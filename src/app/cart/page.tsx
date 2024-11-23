import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className=''>
      {/* products */}
      <div className=''>
      {/* single item */}
        <div className=''>
          <Image src={''} alt={''}/>
          <div className=''>
            <h1>sicilian</h1>
            <span>large</span>
          </div>
          <h2>$7</h2>
          <span>x</span>
        </div>
      </div>
      {/* payment */}
      <div className=''>
        <div className=''>
          <span className=''>subtotal</span>
          <span className=''>$8</span>
        </div>
        <hr className=''/>
        <button className='bg-red-500 text-white p-3 rounded-md uppercase'>checkout</button>
      </div>
    </div>
  )
}

export default CartPage