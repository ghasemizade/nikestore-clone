import clsx from "clsx";
import Wrapper from "./Wrapper";
import {FaGithub} from 'react-icons/fa'
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={clsx(
            "bg-black text-white",
            "pt-14 pb-3"
        )}>
            <Wrapper className={clsx(
                "flex justify-between flex-col",
                "md:flex-row",
                "gap-[50px] md:gap-0",
            )}>
                <div className={clsx(
                    "flex justify-between items-center",
                    "w-full"
                )}>
                    <div className={clsx(
                        "flex flex-col md:flex-row",
                        "gap-[50px] md:gap-[75px] lg:gap-[100px]",
                    )}>
                        <ul className={clsx(
                            "flex flex-col",
                            "gap-4",
                            "shrink-0",
                        )}>
                            <li className={clsx(
                                "font-oswald font-medium",
                                "uppercase text-sm",
                                "cursor-pointer"
                            )}>FIND A STORE</li>
                            <li className={clsx(
                                "font-oswald font-medium",
                                "uppercase text-sm",
                                "cursor-pointer"
                            )}>BECOME A PAERNER</li>
                            <li className={clsx(
                                "font-oswald font-medium",
                                "uppercase text-sm",
                                "cursor-pointer"
                            )}>SIGN UP FOR EMAIL</li>
                            <li className={clsx(
                                "font-oswald font-medium",
                                "uppercase text-sm",
                                "cursor-pointer"
                            )}>SEND US FEEDBACK</li>
                            <li className={clsx(
                                "font-oswald font-medium",
                                "uppercase text-sm",
                                "cursor-pointer"
                            )}>STUDENT DISCOUNT</li>
                        </ul>

                        <ul className={clsx(
                            "flex flex-col",
                            "gap-3"
                        )}>
                            <li className={clsx(
                                "font-medium",
                                "uppercase",
                                "text-sm"
                            )}>About nike</li>
                            <li className={clsx(
                                "font-thin",
                                "uppercase",
                                "text-white/[0.5] hover:text-white",
                                "duration-200"
                            )}>News</li>
                            <li className={clsx(
                                "font-thin",
                                "uppercase",
                                "text-white/[0.5] hover:text-white",
                                "duration-200"
                            )}>Careers</li>
                            <li className={clsx(
                                "font-thin",
                                "uppercase",
                                "text-white/[0.5] hover:text-white",
                                "duration-200"
                            )}>Investors</li>
                            <li className={clsx(
                                "font-thin",
                                "uppercase",
                                "text-white/[0.5] hover:text-white",
                                "duration-200"
                            )}>Sustainability</li>
                        </ul>

                        <ul className={clsx(
                            "flex flex-col",
                            "gap-3"
                        )}>
                            <li className={clsx(
                                "font-medium",
                                "uppercase",
                                "text-sm"
                            )}>get help</li>
                            <li className={clsx(
                                "font-thin",
                                "uppercase",
                                "text-white/[0.5] hover:text-white",
                                "duration-200"
                            )}>order status</li>
                            <li className={clsx(
                                "font-thin",
                                "uppercase",
                                "text-white/[0.5] hover:text-white",
                                "duration-200"
                            )}>delivery</li>
                            <li className={clsx(
                                "font-thin",
                                "uppercase",
                                "text-white/[0.5] hover:text-white",
                                "duration-200"
                            )}>returns</li>
                            <li className={clsx(
                                "font-thin",
                                "uppercase",
                                "text-white/[0.5] hover:text-white",
                                "duration-200"
                            )}>contact us</li>
                        </ul> 
                    </div>
                    <Link href={'https://github.com/ghasemizade'} target="_blank">
                        <FaGithub size={50}/>
                    </Link>
                </div>
            </Wrapper>
        </footer>
    )
}
