"use client";
import React, { useState } from "react";
import Image from "next/image";
import openImage from "../../public/open.png";
import closeImage from "../../public/close.png";
import Link from "next/link";
import LoginPage from "@/app/login/page";
import CartIcon from "./CartIcon";

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
    const [open, setOpen] = useState(false);

    // Simulate a logged-in or logged-out user
    const user = false
    return (
        <div>
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
                <Image
                    src={open ? closeImage : openImage}
                    alt="menu"
                    width={20}
                    height={20}
                />
            </div>

            {open && (<div className="bg-red-500 text-white text-3xl absolute left-0 right-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center z-10">
                {links.map((item) => (
                    <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
                        {item.title}
                    </Link>
                ))}

                {!user 
                    ? <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
                    : <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>
                }
                <Link href="/cart" onClick={()=>setOpen(false)}>
                    <CartIcon/>
                </Link>
            </div>)}
        </div>
    );
};

export default Menu;