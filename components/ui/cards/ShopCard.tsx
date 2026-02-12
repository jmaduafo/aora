import { Product } from "@/types/type";
import Image from "next/image";
import React from "react";
import Header6 from "../headings/Header6";
import { toBase64, shimmer } from "@/utils/blurDataUrl";
import Link from "next/link";
import { createSlug } from "@/utils/helpers";

type Card = {
  readonly item: Product;
};

function ShopCard({ item }: Card) {
  return (
    <Link href={`/shop/${createSlug(item.name)}`}>
      <div className="overflow-hidden w-full h-[50vh] group">
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
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(200, 500),
              )}`}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2 group">
        <Header6
          text={item.name}
          className={`font-montrealMedium group-hover:underline`}
        />
        <Header6 text={`$${item.prices[0]}`} />
      </div>
    </Link>
  );
}

export default ShopCard;
