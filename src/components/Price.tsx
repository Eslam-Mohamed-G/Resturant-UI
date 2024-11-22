import React from 'react'

type Props = {
    id:number;
    img?: string;
    price:number;
    options?: { title: string; additionalPrice: number }[];
}

const Price = ({price, id, options}:Props) => {
  return (
    <div className='w-full flex flex-col gap-8'>
        <h2 className='text-2xl font-bold'>${price.toFixed(2)}</h2>
        {/* option */}
        <div className='flex flex-row items-center justify-center gap-4'>
            {options?.map(option=>(
                <button key={option.title} className='border border-red-300 py-1 px-5 md:px-8 rounded hover:bg-red-400 hover:text-white'>{option.title}</button>
            ))}
        </div>
        {/* quantity */}
        <div className='flex justify-between w-full border'>
            <div className='flex flex-1 items-center justify-between border border-red-300 px-1 md:px-3'>
                <span>Quantity</span>
                <div className='flex gap-2 items-center justify-center'>
                    <button>{'<'}</button>
                    <span>1</span>
                    <button>{'>'}</button>
                </div>
            </div>
            <button className='bg-red-500 text-white uppercase py-2 px-6'>add to cart</button>
        </div>
    </div>
  )
}

export default Price