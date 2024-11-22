"use client"

import { featuredProducts } from "../components/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-95vh overflow-x-scroll custom-scrollbar scroll-smooth text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex ">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-48 hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;


// import { featuredProducts } from "../components/data";
// import Image from "next/image";
// import React, { useRef } from "react";

// interface Product {
//   id: number;
//   img: string;
//   title: string;
//   desc: string;
//   price: number;
// }

// const Featured: React.FC = () => {
//   const carouselRef = useRef<HTMLDivElement | null>(null);

//   // Function to handle scrolling
//   const scrollCarousel = (direction: "left" | "right"): void => {
//     const carousel = carouselRef.current;
//     if (carousel) {
//       const scrollAmount = carousel.offsetWidth; // Scroll by the width of the container
//       if (direction === "left") {
//         carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//       } else {
//         carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <div className="relative w-full text-red-500 box-border">
//       {/* WRAPPER */}
//       <div
//         ref={carouselRef}
//         className="w-screen flex overflow-x-scroll no-scrollbar scroll-smooth"
//       >
//         {/* SINGLE ITEM */}
//         {featuredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="w-screen h-[60vh] flex-shrink-0 flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
//           >
//             {/* IMAGE CONTAINER */}
//             {item.img && (
//               <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
//                 <Image src={item.img} alt={item.title} fill className="object-contain" />
//               </div>
//             )}
//             {/* TEXT CONTAINER */}
//             <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
//               <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
//                 {item.title}
//               </h1>
//               <p className="p-4 2xl:p-8">{item.desc}</p>
//               <span className="text-xl font-bold">${item.price}</span>
//               <button className="bg-red-500 text-white p-2 rounded-md">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CONTROLS */}
//       <button
//         onClick={() => scrollCarousel("left")}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full"
//       >
//         ◀
//       </button>
//       <button
//         onClick={() => scrollCarousel("right")}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-500 text-white p-2 rounded-full"
//       >
//         ▶
//       </button>
//     </div>
//   );
// };

// export default Featured;
