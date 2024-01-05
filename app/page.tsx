'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import Starting from "@/components/Starting";
import Games from "@/components/Games";
import dynamic from 'next/dynamic'

// const Starting = dynamic(() => import('../components/Starting'), { ssr: true }) // 

export default function Home() {
  return (
    <> 
   <Starting />
    <About />
    <Games />
    <Footer />
    </>
  );
}
