import { Package } from "@/types/type";
import Image from "next/image";
import React from "react";
import Header6 from "../headings/Header6";
import Paragraph from "../headings/Paragraph";
import PackageButton from "../buttons/PackageButton";
import { shimmer, toBase64 } from "@/utils/blurDataUrl";

type Card = {
  readonly item: Package;
};

function PackageCard({ item }: Card) {
  return (
    <div>
      <div className="w-full h-[45vh] object-cover object-bottom">
        <Image
          src={item.image}
          alt={item.title}
          className="w-full h-full"
          width={200}
          height={400}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(200, 400),
          )}`}
        />
      </div>
      <div className="mt-3">
        <div className="flex justify-between gap-2">
          <Header6 text={item.title} />
          <Header6 text={`$${item.price}`} />
        </div>
        <div className="mt-1">
          <p className="text-xs uppercase w-fit py-0.5 px-2 rounded-full border border-foreground">
            {item.duration} mins
          </p>
        </div>
        <div className="mt-2">
          <Paragraph text={item.description} />
        </div>
        <div className="mt-3">
          <PackageButton text="Reserve Package" />
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
