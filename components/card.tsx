import clsx from 'clsx'
import React from 'react'

export default function Card() {
  return (
    <div className={clsx(
        "duration-200",
        "hover:scale-105",
        "p-5",
    )}>
            <img src="./images/air-jordan-1hi-flyease/b38436e0-1698-4ccd-ad71-7f64bb805ea6.png" alt="jordanair" />
            <p className={clsx(
                "font-medium",
                "mb-2"
            )}>air jordan flyease</p>
            <div className={clsx(
                "flex justify-between items-center",
            )}>
                <p>$99</p>
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
