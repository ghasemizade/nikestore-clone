"use client"
import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { BiArrowBack } from 'react-icons/bi'
import clsx from 'clsx';


export default function Banner() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className={clsx(
        "relative",
        "text-white text-[20px]",
        "w-full max-w-[1360px]",
        "mx-auto"
    )}>
        <Carousel 
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            ssr={true}
            className='z-10'>
            <a href='#jordan1mid' className={clsx(
                "grayscale",
                "hover:grayscale-0",
                "duration-100",
            )}>
                <img src="./images/air-jordan-1mid/82d26c28-58a2-464f-881e-b20d2b5eafa8.png" alt="jordan1mid" />
            </a>
            <a href='#jordanair' className={clsx(
                "grayscale",
                "hover:grayscale-0",
                "duration-100"
            )}>
                <img src="./images/air-jordan-3retro/4e70f591-7ea1-4f42-9f7f-7f612ada07c1.png" alt="jordanair" />
            </a>
            <a href='#jordanstay' className={clsx(
                "grayscale",
                "hover:grayscale-0",
                "duration-100"
            )}>
                <img src="./images/jordan-stay-royal2/742f2d3a-32fa-4dbe-9f5b-fed487d97fdc.png" alt="jordanstay" />
            </a>
            <a href='#jorandjumpman' className={clsx(
                "grayscale",
                "hover:grayscale-0",
                "duration-100"
            )}>
                <img src="./images/jumpman-mvp/6fc91925-f906-49f7-8b1a-91250e45a9d4.png" alt="jorandjumpman" />
            </a>
            <a href='#jorandjumpman' className={clsx(
                "grayscale",
                "hover:grayscale-0",
                "duration-100"
            )}>
                <img src="./images/jumpman1-mvp/c389ba83-2ceb-4652-ac5e-e47c3a7e9e7a.png" alt="jorandjumpman" />
            </a>
        </Carousel>
    </div>
  )
}
