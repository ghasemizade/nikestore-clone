import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'



const navData = [
    {id: 1, name: "Home", url: "/"},
    {id: 2, name: "About", url: "/about"},
    {id: 3, name: "Categories", subMenu: true},
    {id: 4, name: "Contact", url: "/contact"},
]

const subNavData = [
    {id: 1, name: "Jordan", doc_count: 11},
    {id: 2, name: "Sneakers", doc_count: 8},
    {id: 3, name: "Running shoes", doc_count: 64},
    {id: 4, name: "Football shoes", doc_count: 107},
]

interface MenuProps {
    showCatMenu: boolean
    setShowCatMenu: boolean
    setMobileMenu: boolean
}

export default function MobileMenu({showCatMenu, setShowCatMenu, setMobileMenu}: MenuProps) {
  return (
    <ul className={clsx(
        "flex flex-col",
        "md:hidden",
        "font-bold",
        "absolute left-0",
        "top-[50px]",
        "w-full",
        "h-[calc(100vh-50px)]",
        "bg-white",
        "border-t",
        "text-black"
    )}>
        {navData.map(item => (
            <React.Fragment key={item.id}>
                {
                    !!item?.subMenu ? (
                        <li className={clsx(
                            "cursor-pointer",
                            "py-4 px-5",
                            "border-b",
                            "flex flex-col",
                            "relative"
                        )} onClick={() => setShowCatMenu(!showCatMenu)}>
                            
                            <div className={clsx(
                                "flex justify-between items-center"
                            )}>
                                {item.name}
                                <BsChevronDown size={14}/>
                            </div>

                            {
                                showCatMenu && (
                                    <ul className={clsx(
                                        "bg-black/[0.05]",
                                        "mx-5 mt-5 mb-4",
                                        "top-6 left-0",
                                    )}>
                                        {subNavData.map(subMenu => (
                                            <Link 
                                                key={subMenu.id} 
                                                href={"/"}
                                                onClick={() => {
                                                    setShowCatMenu(false)
                                                    setMobileMenu(false)
                                                }}>
                                                <li className={clsx(
                                                    "py-4 px-8",
                                                    "flex justify-between",
                                                    "border-t",
                                                )}>
                                                    {subMenu.name}
                                                    <span className={clsx(
                                                        "opacity-50",
                                                        "text-sm"
                                                    )}>
                                                        {subMenu.doc_count}
                                                    </span>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                )
                            }
                        </li>
                    ) : (
                        <li className={clsx(
                            "py-4 px-5",
                            "border-b"
                        )}>
                            <Link 
                                href={`${item?.url}`}
                                onClick={() => setMobileMenu(false)}>
                                    {item.name}
                            </Link>
                        </li>
                    )
                }
            </React.Fragment>
        ))}
    </ul>
  )
}
