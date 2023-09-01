import clsx from "clsx";
import Wrapper from "@/components/Wrapper";
import data from '@/components/Listdata'
import Card from "@/components/card";


export default function Category() {
    const filterd = data.filter(item => item.category == "jordan")


  return (
    <>
      <main className={clsx(
        "min-h-screen",
        "flex flex-col items-center justify-between",
        "p-24",
      )}>
        <Wrapper className={clsx(
          "grid md:grid-cols-3 grid-cols-1 gap-20",
          )}>
            {filterd.map(item => (
              <Card 
                key={item.id}
                src={`../${item.src}`}
                title={item.title}
                price={item.price}/>
            ))}
        </Wrapper>
      </main>
    </>
  )
}