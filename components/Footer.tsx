import clsx from "clsx";
import Wrapper from "./Wrapper";
import {FaGithub} from 'react-icons/fa'
import Link from "next/link";
import Fcol from "./Fcol";
import Fcoll from "./Fcoll";

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
                        <Fcol 
                            row1="find a store"
                            row2="become apaerner"
                            row3="sign up for email"
                            row4="send us feedback"
                            row5="student discount"/>

                        <Fcoll 
                            row1="about nike"
                            row2="news"
                            row3="careers"
                            row4="investors"
                            row5="sustainability"/>

                        <Fcoll 
                            row1="get help"
                            row2="order status"
                            row3="delivery"
                            row4="returns"
                            row5="contact us"/>
                    </div>
                    <Link href={'https://github.com/ghasemizade'} target="_blank">
                        <FaGithub size={50}/>
                    </Link>
                </div>
            </Wrapper>
        </footer>
    )
}
