import FlipText from "@/components/ui/animations/FlipText";
import ShopCard from "@/components/ui/cards/ShopCard";
import Header2 from "@/components/ui/headings/Header2";
import Header6 from "@/components/ui/headings/Header6";
import Paragraph from "@/components/ui/headings/Paragraph";
import { montrealMedium } from "@/fonts/fonts";
import Link from "next/link";
import React from "react";

function Shop() {
  const transitionLine1 = [
    {
      text: "Quiet",
    },
    {
      text: "rituals,",
      is_special: true,
    },
  ];

  const transitionLine2 = [
    {
      text: "lasting",
    },
    {
      text: "glow",
    },
  ];

  const dummyShopData = [
    {
      id: "623eweweuyy",
      name: "Facial cleansing cream",
      prices: [75, 35],
      sizes: ["300 mL", "100 mL",],
      images: [
          "https://aora-images.s3.eu-north-1.amazonaws.com/Round_Amber_Glass_Pump_Bottle_Mockup.png",
          "https://aora-images.s3.eu-north-1.amazonaws.com/Cream_Tube.png",
      ],
    },
    {
      id: "2737dewdhewdyw",
      name: "Hydrating Serum",
      prices: [42],
      sizes: ["51 mL"],
      images: [
        "https://aora-images.s3.eu-north-1.amazonaws.com/Frosted_Amber_Bottle_Mockup.png"
      ],
    },
    {
      id: "092019ejndjwde",
      name: "Soothing Oil",
      prices: [50],
      sizes: ["45 mL"],
      images: [
        "https://aora-images.s3.eu-north-1.amazonaws.com/DROPPER_BOTTLE.png"
      ],
    },
    {
      id: "28718whdwhdwegd",
      name: "Hand cream",
      prices: [35],
      sizes: ["100 mL"],
      images: [
        "https://aora-images.s3.eu-north-1.amazonaws.com/Cream_Tube.png",
      ],
    },
  ];

  return (
    <>
      {/* TRANSITION SECTION */}
      <section className="my-[25vh]">
        <div className="flex flex-col">
          <div className="pl-[10vw]">
            <Header2 texts={transitionLine1} />
          </div>
          <div className="pl-[18vw]">
            <Header2 texts={transitionLine2} />
          </div>
        </div>
          <div className="flex justify-center mt-[5vh] pr-[15vw]">
            <Paragraph className="w-[30%]" text="At AORA, we believe beauty is found in stillness and care. Our curated products invite you to embrace the art of self-renewal, carrying the essence of our spa into your home."/>
          </div>
      </section>
      <section className="mt-[12vh]">
        <div className="flex justify-end">
          <Link href="/shop">
            <FlipText>
              <Header6 text="Shop All" className={montrealMedium.className} />
            </FlipText>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-2">
          {dummyShopData.map((item) => {
            return (
              <Link href={`/shop/${item.id}`} key={item.id}>
                <ShopCard item={item} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Shop;
