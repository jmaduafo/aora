import ShopCard from "@/components/ui/cards/ShopCard";
import Header2 from "@/components/ui/headings/Header2";
import Header3 from "@/components/ui/headings/Header3";
import Header4 from "@/components/ui/headings/Header4";
import { Category, Product } from "@/types/type";
import Link from "next/link";
import React, { Fragment } from "react";

function SimilarProducts({ products }: { readonly products: Product[] }) {
  return (
    <section className="mt-[15vh] mb-10">
      <div>
        <Header3 text="You may also like" className="font-montrealMedium text-center" />
      </div>
      {products ? (
        <div className="grid grid-cols-3 gap-4 mt-8">
          {products.map((item) => {
            return (
              <Fragment key={item.id}>
                <ShopCard item={item} />
              </Fragment>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
}

export default SimilarProducts;
