"use client"
import React, { useEffect, useState } from 'react'
import slide1img from "../../public/slide1.png";
import slide2img from "../../public/slide2.png";
import slide3img from "../../public/slide3.png";
import Image from 'next/image';
import { setInterval } from 'timers';
const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    img: "/slide1.png",
    alt: "slide1"
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    img: "/slide2.png",
    alt: "slide2"
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    img: "/slide3.jpg",
    alt: "slide3"
  },
]
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) =>prev===data.length-1 ? 0 : prev + 1),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      {/* text container */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
        <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {data[currentSlide].title}
        </h1>
        <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
      </div>
      {/* iamge conatiner */}
      <div className='flex-1 relative w-full'>
        <Image src={data[currentSlide].img} alt={data[currentSlide].alt} fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider