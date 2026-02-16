import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/types/type";
import { toBase64, shimmer } from "@/utils/blurDataUrl";
import Image from "next/image";
import React from "react";

function Detail({ data }: { readonly data: Product }) {
  return (
    <section>
      {data ? (
        <div className="w-[65%] mx-auto flex mt-[6vh]">
          <div className="flex-1 flex gap-6">
            <div className="flex-1 flex flex-col gap-3">
              {data.images?.map((img) => {
                return (
                  <div
                    className="flex justify-center items-center p-3 shadow-md"
                    key={img}
                  >
                    <Image
                      src={img}
                      width={200}
                      height={500}
                      alt={img}
                      className="w-[80%] h-auto"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(200, 500),
                      )}`}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex-3 flex justify-center w-full object-cover object-bottom">
              <Image
                src={data.images[0]}
                width={200}
                height={500}
                alt={data.name}
                className="w-[80%]"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(200, 500),
                )}`}
              />
            </div>
          </div>
          <div className="flex-1">
            <Breadcrumb>
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
                  <BreadcrumbPage className="capitalize">
                    {data.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      ) : (
        <div>Nothing to see here</div>
      )}
    </section>
  );
}

export default Detail;
