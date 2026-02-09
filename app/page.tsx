import About from "@/components/pages/home/About";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import Shop from "@/components/pages/home/Shop";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Shop/>
      <Services/>
    </>
  );
}
