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
    showCatMenu: boolean,
    setShowCatMenu: boolean
}

export default function Menu({showCatMenu, setShowCatMenu}: MenuProps) {
  return (
    <ul className={clsx(
        "hidden",
        "md:flex items-center",
        "gap-8",
        "font-medium",
        "text-bold"
    )}>
        {navData.map(item => (
            <React.Fragment key={item.id}>
                {
                    !!item?.subMenu ? (
                        <li className={clsx(
                            "cursor-pointer",
                            "flex items-center",
                            "gap-2",
                            "relative",
                        )} onMouseEnter={() => setShowCatMenu(true)}
                           onMouseLeave={() => setShowCatMenu(false)}>
                            {item.name}
                            <BsChevronDown size={14}/>

                            {
                                showCatMenu && (
                                    <ul className={clsx(
                                        "bg-white",
                                        "absolute",
                                        "top-6 left-0",
                                        "min-w-[250px]",
                                        "px-1 py-1",
                                        "text-bold",
                                        "shadow-lg"
                                    )}>
                                        {subNavData.map(subMenu => (
                                            <Link 
                                                key={subMenu.id} 
                                                href={"/"}
                                                onClick={() => setShowCatMenu(false)}>
                                                <li className={clsx(
                                                    "h-12",
                                                    "flex justify-between items-center",
                                                    "px-3",
                                                    "hover:bg-black/[0.03]",
                                                    "rounded-md"
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
                            "cursor-pointer"
                        )}>
                            <Link href={`${item?.url}`}>
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
