'use client'
import React, { useState } from "react"
import clsx from "clsx";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Logo from "../public/icons/nike-4-logo-svgrepo-com.svg"
import Link from "next/link";
import Menu from "./Menu";

export default function Head() {
    const [movileMenu, setMovileMenu] = useState(false)
    const [showCatMenu, setShowCatMenu] = useState(false)
    const [show, setShow] = useState("translate-y-0")
    const [lastScrollY, setLastScrollY] = useState(0)
    

    return (
        <header className={clsx(
            "w-full h-[50px]",
            "md:h-[80px]",
            "bg-white",
            "flex justify-between items-center",
            "z-20",
            "sticky top-0",
            "transition-transform duration-200",
            `${show}`
        )}>
            <Wrapper>
                <Link href={"./"}>
                    <Image 
                        className={clsx(
                            "w-[40px] md:w-[60px]"
                        )}
                        src={Logo}
                        alt="logo"
                    />
                </Link>
                <Menu/>
            </Wrapper>
        </header>
    )
}
