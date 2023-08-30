import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Head from "@/components/Header";
import Headingdesc from "@/components/Headingdesc";
import Wrapper from "@/components/Wrapper";
import Card from "@/components/card";
import clsx from "clsx";


export default function Home() {
  return (
    <>
      <Head />
      <main className={clsx(
        "min-h-screen",
        "flex flex-col items-center justify-between",
        "p-24",
      )}>
        <Banner />
        <Headingdesc />
        <Wrapper className={clsx(
          "grid grid-cols-3"
        )}>
          <Card />
        </Wrapper>
      </main>
      <Footer />
    </>
  )
}