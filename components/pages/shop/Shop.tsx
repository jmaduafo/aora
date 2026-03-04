"use client";

import { Button } from "@/components/ui/button";
import ShopCard from "@/components/ui/cards/ShopCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Header2 from "@/components/ui/headings/Header2";
import Header6 from "@/components/ui/headings/Header6";
import Paragraph from "@/components/ui/headings/Paragraph";
import Loading from "@/components/ui/loading/Loading";
import { Category, Product } from "@/types/type";
import { shopSort } from "@/utils/data";
import { checkForS } from "@/utils/helpers";
import { useFilterProductStore } from "@/zustand/store";
import { ArrowUpDown } from "lucide-react";
import React, { Fragment, useEffect, useState } from "react";

type CategoryShop = {
  readonly allCategories: Category[];
  readonly allProducts: Product[];
};

function Shop({ allCategories, allProducts }: CategoryShop) {
  const [category, setCategory] = useState("");

  const {
    products,
    categories,
    filterItems,
    filterCategory,
    setProducts,
    setCategories,
  } = useFilterProductStore();

  const sort = (type: string, order: string) => {
    filterItems(type, order);
  };

  useEffect(() => {
    if (category === "all") {
      setProducts(allProducts);
    } else {
      filterCategory(category);
    }
  }, [category]);

  useEffect(() => {
    setProducts(allProducts);
    setCategories(allCategories);
    setCategory("all");
  }, []);

  return (
    <>
      <div className="sticky md:relative top-0 z-30 pt-[8vh] bg-background">
        <div className="flex justify-center items-start gap-5">
          <Header2
            texts={[
              {
                text: "shop",
                is_special: true,
              },
            ]}
          />
          <Header6
            text={`${products.length} result${checkForS(products.length)}`}
          />
        </div>
        <div className="flex justify-between items-end gap-3">
          <div className="flex items-center flex-wrap gap-x-8 gap-y-3 mt-[6vh]">
            {categories?.length ? (
              <button
                onClick={() => setCategory("all")}
                className={`hover:opacity-100 duration-300 font-montrealMedium ${category === "all" ? "opacity-100" : "opacity-50"}`}
              >
                <Paragraph text="all" />
              </button>
            ) : null}
            {categories?.length
              ? categories.map((item) => {
                  return (
                    <Fragment key={item.id}>
                      <button
                        onClick={() =>
                          item?.name && setCategory(item.name.toLowerCase())
                        }
                        className={`hover:opacity-100 duration-300 font-montrealMedium ${category === item?.name?.toLowerCase() ? "opacity-100" : "opacity-50"}`}
                      >
                        <Paragraph text={item?.name ?? ""} />
                      </button>
                    </Fragment>
                  );
                })
              : null}
          </div>
          {!!(categories?.length) && <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"ghost"}>
                  <ArrowUpDown strokeWidth={1} />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Sort</DropdownMenuLabel>
                  {shopSort.map((item) => {
                    return (
                      <DropdownMenuItem
                        key={`${item.type} ${item.order}`}
                        onClick={() => sort(item.type, item.order)}
                        className="capitalize"
                      >
                        <item.icon className="text-foreground group-hover:text-background" />{" "}
                        {item.type}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>}
        </div>
      </div>
      {products?.length && category.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
          {products?.map((item) => {
            return (
              <Fragment key={item.id}>
                <ShopCard item={item} />
              </Fragment>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-[20vh] flex justify-center items-center">
          <Loading size="size-12" />
        </div>
      )}
      {!products.length && !!category.length && <p>No products</p>}
    </>
  );
}

export default Shop;
