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
import Image from "next/image";
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
          className="max-w-[16.5em]"
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
          className="w-full mt-8"
        >
          <CarouselContent>
            {galleryImages.map((item, i) => (
              <CarouselItem
                key={item}
                className="sm:basis-1/2 md:basis-1/3 2xl:basis-1/4 h-[55vh] sm:h-[40vh] md:h-[35vh] lg:h-[45vh] xl:h-[50vh] 2xl:h-[60vh] object-bottom object-cover ml-4"
              >
                <Image
                  src={item}
                  alt={`gallery display ${i + 1}`}
                  width={200}
                  height={500}
                  className="w-full h-full"
                  priority={i === 0}
                />
              </CarouselItem>
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
