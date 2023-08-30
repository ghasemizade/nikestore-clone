import React from 'react'
import Wrapper from './Wrapper'
import clsx from 'clsx'

export default function Headingdesc() {
  return (
    <Wrapper>
        <div className={clsx(
            "text-center",
            "max-w-[800px]",
            "mx-auto my-[50px] md:my-[80px]",
        )}>
            <h1 className={clsx(
                "text-[28px] md:text-[44px] mb-5",
                "leading-tight",
                "uppercase",
                "font-black",
            )}>
                TOGETHER AT THE START
            </h1>
            <p className={clsx(
                "text-md md:text-xl"
            )}>
                Reliable products for a strong back to school
            </p>
        </div>
    </Wrapper>
  )
}
