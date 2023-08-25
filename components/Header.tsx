'use client'
import React, { useState } from "react"
import clsx from "clsx";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Logo from "../public/icons/nike-4-logo-svgrepo-com.svg"
import Link from "next/link";
import Menu from "./Menu";
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsCart } from 'react-icons/bs'
import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'


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
            <Wrapper className={clsx(
                "h-[60px]",
                "flex justify-between items-center"
            )}>
                <Link href={"./"}>
                    <Image 
                        className={clsx(
                            "w-[40px] md:w-[60px]"
                        )}
                        src={Logo}
                        alt="logo"
                    />
                </Link>
                <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}/>
            </Wrapper>

            <div className={clsx(
                "flex items-center",
                "gap-2",
                "text-black"
            )}>
                <div className={clsx(
                    "w-8 md:w-12 h-8 md:h-12",
                    "rounded-full",
                    "flex justify-center items-center",
                    "hover:bg-black/[0.05]",
                    "cursor-pointer",
                    "relative"
                )}>
                    <BsCart className={clsx(
                        "text-[15px] md:text-[20px]"
                    )}/>
                    <div className={clsx(
                        "h-[14px] md:h-[18px]",
                        "min-w-[14px] md:min-w-[18px]",
                        "bg-red-600",
                        "rounded-full",
                        "absolute top-1 left-5 md:left-7",
                        "text-white text-[10px] md:text-[12px]",
                        "flex justify-center items-center",
                        "px-[2px]"
                    )}>5</div>
                </div>
            </div>
        </header>
    )
}
