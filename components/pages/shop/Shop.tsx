"use client";

import ShopCard from "@/components/ui/cards/ShopCard";
import Header2 from "@/components/ui/headings/Header2";
import Header6 from "@/components/ui/headings/Header6";
import Paragraph from "@/components/ui/headings/Paragraph";
import { Category, Product } from "@/types/type";
import { checkForS } from "@/utils/helpers";
import React, { Fragment, useEffect, useState } from "react";

type CategoryShop = {
  categories: Category[];
  allProducts: Product[];
};

function Shop({ categories, allProducts }: CategoryShop) {
  const [category, setCategory] = useState("all");
  const [categoryProducts, setCategoryProducts] = useState<Category>({});

  const findCategory = () => {
    const cat = categories.find(
      (item) => item?.name?.toLowerCase() === category.toLowerCase(),
    );

    if (cat) {
      setCategoryProducts(cat);
    }
  };

  useEffect(() => {
    findCategory();
  }, [category]);

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
            text={`${category === "all" ? allProducts.length : categoryProducts?.products?.length} result${checkForS(category === "all" ? allProducts.length : categoryProducts?.products ? categoryProducts.products.length : 0)}`}
          />
        </div>
        <div className="flex items-center flex-wrap gap-x-8 gap-y-3 mt-[6vh]">
          <button
            onClick={() => setCategory("all")}
            className={`hover:opacity-100 duration-300 font-montrealMedium ${category !== "all" ? "opacity-50" : "opacity-100"}`}
          >
            <Paragraph text="all" />
          </button>
          {categories.map((item) => {
            return (
              <Fragment key={item.id}>
                <button
                  onClick={() =>
                    item?.name && setCategory(item.name.toLowerCase())
                  }
                  className={`hover:opacity-100 duration-300 font-montrealMedium ${category !== item?.name?.toLowerCase() ? "opacity-50" : "opacity-100"}`}
                >
                  <Paragraph text={item?.name ?? ""} />
                </button>
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        {category === "all"
          ? allProducts.map((item) => {
              return (
                <Fragment key={item.id}>
                  <ShopCard item={item} />
                </Fragment>
              );
            })
          : categoryProducts?.products
            ? categoryProducts?.products.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <ShopCard item={item} />
                  </Fragment>
                );
              })
            : null}
        {!allProducts.length ||
          (categoryProducts?.products &&
            !categoryProducts?.products?.length && <p>No products</p>)}
      </div>
    </>
  );
}

export default Shop;
