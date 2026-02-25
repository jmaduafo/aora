"use client";

import React, { Fragment, useState, useEffect } from "react";
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
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import PurchaseButton from "../buttons/PurchaseButton";
import CartItem from "../cards/CartItem";
import { useCartStore } from "@/zustand/store";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { items, clearCart, getTotal } = useCartStore();
  const route = useRouter();

  useEffect(() => {
    setIsCartOpen(true);
  }, [items]);

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
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
          <SheetTrigger>
            <FlipText>
              <Paragraph
                text={`Cart ( ${items.length} )`}
                className={`font-montrealMedium`}
              />
            </FlipText>
          </SheetTrigger>
          <SheetContent showCloseButton={false} className="">
            <SheetHeader aria-describedby={undefined}>
              <SheetTitle>Cart ( {items.length} )</SheetTitle>
            </SheetHeader>
            <div className="px-3 flex flex-col gap-4 h-[90vh] overflow-y-auto verticalBar">
              {items.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <CartItem setCartOpen={setIsCartOpen} item={item} />
                  </Fragment>
                );
              })}
            </div>
            <SheetFooter>
              <div className="flex justify-end mb-1">
                {items.length > 0 && (
                  <FlipText>
                    <button
                      className="uppercase text-sm font-montrealMedium hover:opacity-100 opacity-60 duration-300"
                      onClick={clearCart}
                    >
                      Clear
                    </button>
                  </FlipText>
                )}
              </div>
              <PurchaseButton
                text={
                  items.length > 0
                    ? `Checkout: $${getTotal()}`
                    : "Explore our Shop"
                }
                action={() => {
                  items.length <= 0 && route.push("/shop");
                  setIsCartOpen(false);
                }}
              />
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
