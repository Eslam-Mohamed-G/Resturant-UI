import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

import phonImg from "../../public/phone.png";

const Navbar = () => {
  const user = false;
  return (
    <div className='h-12 px-5 border-b-2 border-b-red-500 text-red-500 uppercase flex justify-between items-center md:h-24 lg:px-20 xl:px-40'>
      {/* LEFT LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* {logo} */}
      <div className='text-xl md:font-bold flex-1'>
        <Link href={"/"}>Massimo</Link>
      </div>

      {/* {mobile menu} */}
      <div className='md:hidden'>
        <Menu/>
      </div>

      {/* RIGHT LINKS */}
      <div className='hidden md:flex gap-4 flex-1 items-center justify-end'>
        <div className='md:absolute top-3 rightt-3 lg:static flex items-center gap-2 bg-orange-300 px-1 rounded-md cursor-pointer'>
          <Image src={phonImg} alt={'phon'} width={20} height={20}/>
          <span>123 584 69</span>
        </div>
        {!user 
        ? <Link href="/login">Login</Link>
        :<Link href="/orders">Order</Link>}

        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar