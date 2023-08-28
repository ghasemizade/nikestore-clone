import React from 'react'
import clsx from "clsx";

interface fcolProps {
    row1: string
    row2: string
    row3: string
    row4: string
    row5?: string
    row6?: string
}

export default function Fcol({row1, row2, row3, row4, row5}: fcolProps) {
  return (
    <ul className={clsx(
        "flex flex-col",
        "gap-4",
        "shrink-0",
    )}>
        <li className={clsx(
            "font-oswald font-medium",
            "uppercase text-sm",
            "cursor-pointer"
        )}>{row1}</li>
        <li className={clsx(
            "font-oswald font-medium",
            "uppercase text-sm",
            "cursor-pointer"
        )}>{row2}</li>
        <li className={clsx(
            "font-oswald font-medium",
            "uppercase text-sm",
            "cursor-pointer"
        )}>{row3}</li>
        <li className={clsx(
            "font-oswald font-medium",
            "uppercase text-sm",
            "cursor-pointer"
        )}>{row4}</li>
        <li className={clsx(
            "font-oswald font-medium",
            "uppercase text-sm",
            "cursor-pointer"
        )}>{row5}</li>
    </ul>

  )
}
