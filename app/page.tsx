import Banner from "@/components/Banner";
import Headingdesc from "@/components/Headingdesc";
import Wrapper from "@/components/Wrapper";
import Card from "@/components/card";
import clsx from "clsx";
import data from '@/components/Listdata'


export default function Home() {
  return (
    <>
      <main className={clsx(
        "min-h-screen",
        "flex flex-col items-center justify-between",
        "p-24",
      )}>
        <Banner />
        <Headingdesc />
        <Wrapper className={clsx(
          "grid md:grid-cols-3 grid-cols-1 gap-20",
        )}>
          {data.map(item => (
            <>
            <Card 
              key={item.id}
              src={item.src}
              title={item.title}
              price={item.price}/>
            </>
          ))}
        </Wrapper>
      </main>
    </>
  )
}