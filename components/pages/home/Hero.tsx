import React from "react";
import Image from "next/image";
import Header1 from "@/components/ui/headings/Header1";
import Koi from "@/public/images/home/koi_crop.jpg";
import Header5 from "@/components/ui/headings/Header5";
import BlurEffect from "@/components/ui/animations/BlurEffect";
import HeroSpread from "@/components/ui/animations/HeroSpread";

function Hero() {
  return (
    <section className="xl:min-h-screen">
      <div className="flex justify-center relative">
        <BlurEffect>
          <Header1 text="aora" />
        </BlurEffect>

        <div className="absolute top-[85%] left-1/2 transform -translate-[50%] flex items-center gap-3">
          <Header5 className="whitespace-nowrap" text="Spa &" />
          <div className="w-[28vw] object-cover object-center">
            <Image
              src={Koi}
              alt="koi fish swimming"
              className="w-full h-full"
            />
          </div>
          <HeroSpread x={10}>
            <Header5 className="whitespace-nowrap" text="Wellness" />
          </HeroSpread>
        </div>
      </div>
    </section>
  );
}

export default Hero;
