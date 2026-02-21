"use client";
import { Cart } from "@/types/type";
import { toBase64, shimmer } from "@/utils/blurDataUrl";
import Image from "next/image";
import React, { useState } from "react";
import Paragraph from "../headings/Paragraph";
import Counter from "../counter/Counter";
import { X } from "lucide-react";
import Header6 from "../headings/Header6";
import Link from "next/link";
import { createSlug } from "@/utils/helpers";

type Item = {
  readonly item: Cart;
};

function CartItem({ item }: Item) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex gap-2">
      <div className="relative w-20 h-30 flex justify-center items-center">
        <div
          className="w-full h-full absolute top-0 left-0 bg-cover bg-no-repeat bg-center opacity-50 -z-2"
          style={{ backgroundImage: `url(../images/shop/backdrop.jpg)` }}
        ></div>
        <div className="h-20 object-cover object-bottom">
          <Image
            src={item.image}
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
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-2">
          <div className="flex flex-col gap-1">
            <Link href={`/shop/${createSlug(item.name)}`}>
              <Header6 text={item.name} className="font-montrealMedium hover:underline duration-300" />
            </Link>
            <Header6 text={`$${item.price * quantity}`} />
          </div>
          <button>
            <X className="size-4" />
          </button>
        </div>
        <div className="mt-auto flex justify-between items-end gap-2">
          <Paragraph text={item.size} />
          <Counter
            count={quantity}
            setCount={setQuantity}
            quantity={item.quantity}
            size="size-3"
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
