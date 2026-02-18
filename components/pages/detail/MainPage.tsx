import prisma from "@/prisma/client";
import { deSlug } from "@/utils/helpers";
import React from "react";
import Detail from "./Detail";
import { Product } from "@/types/type";
import SimilarProducts from "./SimilarProducts";

async function getSimilarProducts(product_name: string) {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      products: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    where: {
      products: {
        some: {
          name: {
            equals: deSlug(product_name),
            mode: "insensitive",
          }
        },
      },
    },
  });

  if (!categories) return [];

  const similarProducts: string[] = [];

  categories.forEach((item) => {
    item.products?.forEach((product) => {
      product.name.toLowerCase() !== deSlug(product_name) &&
        similarProducts.push(product.id);
    });
  });

  const similarIds = [...new Set(similarProducts)];

  return await prisma.product.findMany({
    take: 6,
    select: {
      id: true,
      prices: true,
      name: true,
      images: true,
    },
    where: {
      id: { in: similarIds },
      images: {
        isEmpty: false,
      },
    },
  });
}

async function MainPage({ product_name }: { readonly product_name: string }) {
  const detail = await prisma.product.findFirst({
    where: {
      name: {
        equals: deSlug(product_name),
        mode: "insensitive",
      },
    },
  });

  const products = await getSimilarProducts(product_name);

  return (
    <div className="w-full lg:w-[80%] xl:w-[65%] 2xl:w-[50%] mx-auto ">
      {/* PRODUCT DETAIL & DESCRIPTIONS WITH PRODUCT IMAGE */}
      <Detail data={detail as Product} />
      {/* SIMILAR PRODUCTS */}
      <SimilarProducts products={products} />
    </div>
  );
}

export default MainPage;
