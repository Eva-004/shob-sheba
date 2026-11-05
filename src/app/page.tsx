
import Hero from "@/components/pages/homepage/Hero";
import PopularServices from "@/components/pages/homepage/PopularServices";
import Image from "next/image";

export default function Home() {
  return (
    <>
   <div className="relative -mt-32 bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat pt-12">
    <Hero/>
   </div>
   <PopularServices/>
    </>

  );
}
