import FlipText from "@/components/ui/animations/FlipText";
import ShopCard from "@/components/ui/cards/ShopCard";
import Header2 from "@/components/ui/headings/Header2";
import Header6 from "@/components/ui/headings/Header6";
import Paragraph from "@/components/ui/headings/Paragraph";
import { createSlug } from "@/utils/helpers";
import Link from "next/link";
import React, { Fragment } from "react";
import prisma from "@/prisma/client";

async function Shop() {
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

 const data = await prisma.product.findMany({
  take: 4,
  where: {
    images: {
      isEmpty: false
    }
  },
  select: {
    images: true,
    name: true,
    id: true,
    prices: true
  },
 })

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
          <Paragraph
            className="max-w-[25em]"
            text="At AORA, we believe beauty is found in stillness and care. Our curated products invite you to embrace the art of self-renewal, carrying the essence of our spa into your home."
          />
        </div>
      </section>
      <section className="mt-[12vh]">
        <div className="flex justify-end">
          <Link href="/shop">
            <FlipText>
              <Header6 text="Shop All" className="font-montrealMedium" />
            </FlipText>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-2">
          {data.map((item) => {
            return (
              <Fragment key={item.id}>
                <ShopCard item={item} />
              </Fragment>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Shop;
