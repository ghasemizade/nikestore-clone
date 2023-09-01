/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import React from 'react'

interface CardProps {
    src: string
    title: string
    price: number
}

export default function Card({src, title, price}: CardProps) {
  return (
    <div className={clsx(
        "duration-200",
        "hover:scale-105",

    )}>
            <img className={clsx(
            )} src={src} 
                alt={title} />
            <p className={clsx(
                "font-medium",
                "mb-2 mt-4",
            )}>{title}</p>
            <div className={clsx(
                "flex justify-between items-center",
            )}>
                <p>${price}</p>
                <button className={clsx(
                    "uppercase",
                    "text-green-600",
                    "hover:text-white hover:bg-green-600",
                    "p-2 rounded",
                    "duration-100"
                )}>addcart</button>
            </div>
    </div>
  )
}
