"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header2 from "@/components/ui/headings/Header2";
import Paragraph from "@/components/ui/headings/Paragraph";
import { galleryImages } from "@/utils/data";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

function Gallery() {
  return (
    <section className="mt-[15vh]">
      <div className="pl-[8vw]">
        <Header2
          texts={[
            {
              text: "gallery",
              is_special: true,
            },
          ]}
        />
      </div>
      <div className="w-full sm:w-[90%] xl:w-[80%] ml-auto mt-8">
        <Paragraph
          className="w-[20%]"
          text="Explore the serene spaces and thoughtful details that shape the AORA experience, where harmony, light, and care exist in balance."
        />
        {/* GALLERY CAROUSEL */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-4"
        >
          <CarouselContent>
            {galleryImages.map((item, i) => (
              <CarouselItem
                key={item}
                className="basis-1/3 h-[45vh] object-bottom bg-cover bg-no-repeat bg-center ml-4"
                style={{ backgroundImage: `url(${item})` }}
              ></CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default Gallery;
