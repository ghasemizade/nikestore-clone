import React from 'react'
import clsx from "clsx";

interface fcollProps {
    row1: string
    row2: string
    row3: string
    row4: string
    row5?: string
    row6?: string
}

export default function Fcoll({row1, row2, row3, row4, row5}: fcollProps) {
  return (
    <ul className={clsx(
        "flex flex-col",
        "gap-3"
    )}>
        <li className={clsx(
            "font-medium",
            "uppercase",
            "text-sm"
        )}>{row1}</li>
        <li className={clsx(
            "font-thin",
            "uppercase",
            "text-white/[0.5] hover:text-white",
            "duration-200"
        )}>{row2}</li>
        <li className={clsx(
            "font-thin",
            "uppercase",
            "text-white/[0.5] hover:text-white",
            "duration-200"
        )}>{row3}</li>
        <li className={clsx(
            "font-thin",
            "uppercase",
            "text-white/[0.5] hover:text-white",
            "duration-200"
        )}>{row4}</li>
        <li className={clsx(
            "font-thin",
            "uppercase",
            "text-white/[0.5] hover:text-white",
            "duration-200"
        )}>{row5}</li>
    </ul>
  )
}
