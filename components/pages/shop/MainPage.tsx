import { prisma } from "@/prisma/client";
import React from "react";
import Shop from "./Shop";

async function MainPage() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        where: {
          images: {
            isEmpty: false,
          },
        },
      },
    },
  });

  const allProducts = await prisma.product.findMany({
    where: {
      images: {
        isEmpty: false,
      },
    },
    select: {
      images: true,
      name: true,
      id: true,
      prices: true,
    },
  });

  return (
    <section className="pb-10 min-h-[55vh] relative">
      <Shop categories={categories} allProducts={allProducts} />
    </section>
  );
}

export default MainPage;
