"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FlipText from "@/components/ui/animations/FlipText";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PurchaseButton from "@/components/ui/buttons/PurchaseButton";
import Counter from "@/components/ui/counter/Counter";
import Header5 from "@/components/ui/headings/Header5";
import Header6 from "@/components/ui/headings/Header6";
import Paragraph from "@/components/ui/headings/Paragraph";
import { Product } from "@/types/type";
import { toBase64, shimmer } from "@/utils/blurDataUrl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Detail({ data }: { readonly data: Product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    data.quantity &&
      selectedQuantity > data.quantity[selectedIndex] &&
      setSelectedQuantity(data.quantity[selectedIndex]);
  }, [selectedIndex]);

  const accordion = [
    {
      title: "Key Ingredients",
      answers: data?.keyIngredients,
    },
    {
      title: "Ingredients",
      answers: data?.ingredients,
    },
    {
      title: "How to Use",
      answers: data?.howToUse,
      bullet: true,
    },
    {
      title: "Warnings",
      answers: data?.warnings,
      bullet: true,
    },
    {
      title: "Aromas",
      answers: data?.aromas,
      bullet: true,
    },
  ];

  return (
    <section className="mt-[6vh]">
      {data ? (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col-reverse sm:flex-row gap-6">
            <div className="grid grid-cols-2 sm:flex-1 sm:flex sm:flex-col gap-3">
              {data.images?.map((img) => {
                return (
                  <div
                    className="w-full sm:w-full h-40 flex justify-center items-center p-3 shadow-md"
                    key={img}
                  >
                    <div className="h-30 object-cover object-bottom">
                      <Image
                        src={img}
                        width={200}
                        height={500}
                        alt={img}
                        className="w-full h-full"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                          shimmer(200, 500),
                        )}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex-3 flex justify-center">
              <div className="h-120 object-cover object-bottom">
                <Image
                  src={data.images[0]}
                  width={200}
                  height={500}
                  alt={data.name}
                  className="w-full h-full"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(200, 500),
                  )}`}
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            {/* BREADCRUMB */}
            <Breadcrumb className="">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {data.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            {/* TITLE & PRICE */}
            <div className="py-2 border-b border-b-foreground mt-2">
              <Header5 text={data.name} className="font-montrealMedium" />
              <Header5 text={`$${data.prices[selectedIndex]}`} />
            </div>
            {/* DESCRIPTION */}
            <div className="mt-4">
              <Paragraph text={data.description ?? ""} />
            </div>
            {/* PRODUCT SIZES */}
            <div className="mt-4">
              <Paragraph text="Sizes" className="font-montrealMedium" />
              <div className="flex items-center gap-6 mt-1">
                {data.sizes?.map((item, i) => {
                  return (
                    <div key={item} className="flex items-center gap-2">
                      <input
                        className=""
                        type="radio"
                        value={item}
                        name="size"
                        checked={i === selectedIndex}
                        onChange={() => setSelectedIndex(i)}
                      />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* PRODUCT QUANTITY COUNTER */}
            <div className="mt-5">
              {data.quantity && data.quantity[selectedIndex] !== 0 && (
                <Counter
                  count={selectedQuantity}
                  setCount={setSelectedQuantity}
                  quantity={data.quantity[selectedIndex]}
                />
              )}
            </div>
            {/* ADD TO CART BUTTON */}
            <div className="mt-4">
              <PurchaseButton text="Add to cart" />
            </div>
            {/* MORE INFO ACCORDION */}
            <Accordion
              type="single"
              collapsible
              defaultValue={undefined}
              className="w-full mt-5 border-y-[1.5px]"
            >
              {accordion.map((item) => {
                return (
                  <AccordionItem
                    value={item.title}
                    key={item.title}
                    className=""
                  >
                    <AccordionTrigger showIcon iconSize="w-5 h-5">
                      <FlipText>
                        <Header6 className="" text={item.title} />
                      </FlipText>
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.answers?.map((answer, i) => {
                        return item.bullet ? (
                          <div key={answer} className="flex items-center gap-2">
                            <span className="bullet"></span>
                            <span>{answer}</span>
                          </div>
                        ) : (
                          <span key={answer}>
                            {answer}
                            {item.answers &&
                              i !== item.answers?.length - 1 &&
                              ", "}
                          </span>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      ) : (
        <div>Nothing to see here</div>
      )}
    </section>
  );
}

export default Detail;
