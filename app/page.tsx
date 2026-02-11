import About from "@/components/pages/home/About";
import Faq from "@/components/pages/home/Faq";
import Gallery from "@/components/pages/home/Gallery";
import Hero from "@/components/pages/home/Hero";
import Packages from "@/components/pages/home/Packages";
import Services from "@/components/pages/home/Services";
import Shop from "@/components/pages/home/Shop";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Shop/>
      <Services/>
      <Gallery/>
      <Packages/>
      <Faq/>
    </>
  );
}
