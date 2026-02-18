"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import BookButton from "../buttons/BookButton";
import Link from "next/link";
import FlipText from "../animations/FlipText";
import Paragraph from "../headings/Paragraph";
import Menu from "./Menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import Header5 from "../headings/Header5";
import PurchaseButton from "../buttons/PurchaseButton";
import { Cart } from "@/types/type";
import CartItem from "../cards/CartItem";
import { cartSum } from "@/utils/helpers";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartList: Cart[] = [
    {
      id: "ddgsdwhg",
      productId: "dhjshdjhs",
      name: "Nourishing face cream",
      quantity: 30,
      price: 73,
      size: "120ml",
      image:
        "https://aora-images.s3.eu-north-1.amazonaws.com/DROPPER_BOTTLE.png",
      createdAt: new Date(Date.now()),
    },
    {
      id: "sdjsdjhsdsg",
      productId: "dhjshdjhs",
      name: "Koi hydrating serum",
      quantity: 10,
      price: 35,
      size: "60ml",
      image:
        "https://aora-images.s3.eu-north-1.amazonaws.com/Frosted_Amber_Bottle_Mockup.png",
      createdAt: new Date(Date.now()),
    },
    {
      id: "sdjschssdjg",
      productId: "dhjshdjhs",
      name: "Koi hydrating serum",
      quantity: 10,
      price: 35,
      size: "60ml",
      image:
        "https://aora-images.s3.eu-north-1.amazonaws.com/Frosted_Amber_Bottle_Mockup.png",
      createdAt: new Date(Date.now()),
    },
    {
      id: "shsucgsdc",
      productId: "dhjshdjhs",
      name: "Koi hydrating serum",
      quantity: 10,
      price: 35,
      size: "60ml",
      image:
        "https://aora-images.s3.eu-north-1.amazonaws.com/Frosted_Amber_Bottle_Mockup.png",
      createdAt: new Date(Date.now()),
    },
    {
      id: "oferifos",
      productId: "dhjshdjhs",
      name: "Koi hydrating serum",
      quantity: 10,
      price: 95,
      size: "60ml",
      image:
        "https://aora-images.s3.eu-north-1.amazonaws.com/Frosted_Amber_Bottle_Mockup.png",
      createdAt: new Date(Date.now()),
    },
    {
      id: "abhcxgvscg",
      productId: "dhjshdjhs",
      name: "Koi hydrating serum",
      quantity: 10,
      price: 55,
      size: "60ml",
      image:
        "https://aora-images.s3.eu-north-1.amazonaws.com/Frosted_Amber_Bottle_Mockup.png",
      createdAt: new Date(Date.now()),
    },
  ];
  return (
    <header className="z-50 sticky top-0 flex justify-between items-center py-5 px-6">
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <button onClick={() => setIsMenuOpen(true)}>
        <FlipText>
          <Paragraph text="Menu" className={`font-montrealMedium`} />
        </FlipText>
      </button>
      <button className="absolute top-1/2 left-1/2 transform -translate-[50%] w-7 2xl:w-9 object-cover object-bottom ">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-full h-full" />
        </Link>
      </button>
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <FlipText>
            <Paragraph text={`Cart ( ${cartList.length} )`} className={`font-montrealMedium`} />
            </FlipText>
          </SheetTrigger>
          <SheetContent showCloseButton={false} className="">
            <SheetHeader aria-describedby={undefined}>
              <SheetTitle>Cart ( {cartList.length} )</SheetTitle>
            </SheetHeader>
            <div className="px-3 flex flex-col gap-3 overflow-auto verticalBar">
              {cartList.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <CartItem item={item} />
                  </Fragment>
                );
              })}
            </div>
            <SheetFooter>
              <PurchaseButton text={`Checkout: $${cartSum(cartList.map(item => item.price))}`} />
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <div className="hidden sm:block">
          <BookButton text="Book Now" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
