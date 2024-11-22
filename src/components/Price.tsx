'use client'
import React, { useState } from 'react'

type Props = {
    id:number;
    img?: string;
    price:number;
    options?: { title: string; additionalPrice: number }[];
}

const Price = ({price, id, options}:Props) => {
    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)
  return (
    <div className="w-full flex flex-col gap-8">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* option */}
      <div className="flex flex-row items-center justify-center gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="border border-red-300 py-1 px-5 md:px-8 rounded hover:bg-red-400 hover:text-white"
            style={{
                background: selected===index? "rgb(248 113 113)" : "white",
                color: selected===index ? "white" : "red"
            }}
            onClick={()=>setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* quantity */}
      <div className="flex justify-between w-full border">
        <div className="flex flex-1 items-center justify-between border border-red-300 px-1 md:px-3">
          <span>Quantity</span>
          <div className="flex gap-2 items-center justify-center">
            <button onClick={()=>setQuantity(prv=> prv > 1 ? prv - 1 : 1)}>{"<"}</button>
            <span>{quantity}</span>
            <button onClick={()=>setQuantity(prv=> prv +1)}>{">"}</button>
          </div>
        </div>
        <button className="bg-red-500 text-white uppercase py-2 px-6">
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Price