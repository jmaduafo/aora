import { Product } from "@/types/type";
import Image from "next/image";
import React from "react";
import Header6 from "../headings/Header6";
import { montrealMedium } from "@/fonts/fonts";

type Card = {
  readonly item: Product;
};

function ShopCard({ item }: Card) {
  return (
    <div>
      <div className="overflow-hidden w-full h-[45vh] group">
        <div className="w-full h-full relative flex justify-center items-center group-hover:scale-105 duration-400">
          <div
            className="w-full h-full absolute top-0 left-0 bg-cover bg-no-repeat bg-center opacity-50 -z-1"
            style={{ backgroundImage: `url(../images/shop/backdrop.jpg)` }}
          ></div>
          <div className="h-70 object-cover object-bottom">
            <Image
              src={item.images[0]}
              alt={item.name}
              className="w-full h-full"
              width={200}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <Header6 text={item.name} className={montrealMedium.className} />
        <Header6 text={`$${item.prices[0]}`} />
      </div>
    </div>
  );
}

export default ShopCard;
