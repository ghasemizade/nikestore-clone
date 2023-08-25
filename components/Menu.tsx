import clsx from 'clsx'
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


export default function Menu() {
  return (
    <ul className={clsx(
        "hidden",
        "md:flex items-center",
        "gap-8",
        "font-medium",
        "text-bold"
    )}>
        {navData.map(item => (
            <>
                <li>{item.name}</li>
            </>
        ))}
    </ul>
  )
}
