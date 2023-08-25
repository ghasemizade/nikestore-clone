import clsx from 'clsx'
import React from 'react'

interface wrapperProps {
    children?: React.ReactNode,
    className?: string
}

export default function Wrapper({ children, className }: wrapperProps) {
  return (
    <div className={clsx(
        "w-full max-w-[1280px]",
        "px-5 md:px-10",
        "mx-auto",
        `${className}` || ""
    )}>
        {children}
    </div>
  )
}
