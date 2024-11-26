import { menu } from '@/components/data'
import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-9rem)] md:h-[calc(100vh-15rem)] flex flex-col md:flex-row items-center justify-center'>
      {menu.map(category =>(
        <Link href={`/menu/${category.slug}`} key={category.id} style={{backgroundImage:`url(${category.img})`}} className='w-full h-1/3 bg-cover p-6 sm:p-8 md:h-2/4 xl:h-3/5'>
          <div className='w-1/2 h-3/4 flex flex-col justify-between'>
            <h1 className={`uppercase font-bold text-3xl text-${category.color}`}>{category.title}</h1>
            <p className={`text-sm my-2 text-${category.color}`}>{category.desc}</p>
            <button className={`hidden md:block py-2 px-4 rounded-md w-fit bg-${category.bgColor}`}><span className={`text-${category.textColor}`}>Explore</span></button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage
