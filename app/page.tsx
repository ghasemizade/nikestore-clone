import Footer from "@/components/Footer";
import Head from "@/components/Header";
import clsx from "clsx";


export default function Home() {
  return (
    <>
      <Head />
      <main className={clsx(
        "min-h-screen",
        "flex flex-col items-center justify-between",
        "p-24"
      )}>
        Home page
      </main>
      <Footer />
    </>
  )
}
