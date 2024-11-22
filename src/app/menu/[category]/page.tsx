"use client"
import { pizzas, burgers, pastas } from '@/components/data'
import Image from 'next/image'
import Link from 'next/link'
import { useParams} from 'next/navigation'
import React from 'react'

const CategoryPage = () => {
  const { category } = useParams();
  const data = 
  category == "pizzas" ? pizzas
  : category == "burgers" ? burgers
    : category == "pastas" ? pastas : [];
    console.log("Slug value:", category);

  return (
    <>
    <div className='flex flex-wrap text-red-500'>
      {data.map(item => (
        <Link href={`/product/${item.id}`} key={item.id}  className='w-full h-[60vh] p-2 border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 flex flex-col justify-between group odd:bg-fuchsia-50'>
          {/* // image */}
          {item.img && (
            <div className='relative h-[80%] flex flex-col'>
              <Image src={item.img} alt={'img'} fill className='object-contain'/>
            </div>
          )}

          {/* // text */}
          <div className='flex flex-wrap justify-between items-center px-4 uppercase font-bold'>
            <h1 className='text-xl md:text-2xl p-2'>{item.title}</h1>
            <span className='group-hover:hidden'>${item.price}</span>
            <button className='hidden group-hover:block bg-red-500 text-white p-2 rounded'>add to cart</button>
          </div>
        </Link>
      ))}
    </div>
    </>
  )
}

export default CategoryPage