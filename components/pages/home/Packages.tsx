import PackageCard from "@/components/ui/cards/PackageCard";
import Header2 from "@/components/ui/headings/Header2";
import Paragraph from "@/components/ui/headings/Paragraph";
import { allPackages } from "@/utils/data";
import React, { Fragment } from "react";

function Packages() {
  return (
    <>
      <section className="flex flex-col items-center mt-[15vh]">
        <div className="pr-[6vw]">
          <Header2
            texts={[
              {
                text: "For",
              },
              {
                text: "moments",
                is_special: true,
              },
            ]}
          />
        </div>
        <div className="pl-[6vw]">
          <Header2
            texts={[
              {
                text: "of",
              },
              {
                text: "mental",
              },
              {
                text: "calm",
                is_special: true,
              },
            ]}
          />
        </div>
        <div className="flex justify-center pl-[18vw] mt-4">
          <Paragraph
            className="max-w-[18em]"
            text="AORA has thoughtfully curated packages designed to restore balance, deepen relaxation, and invite moments of quiet renewal."
          />
        </div>
      </section>
      <section className="mt-[15vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-26 w-[85%] xs:w-[75%] sm:w-[85%] lg:w-[60%] xl:w-[75%] mx-auto">
          <div className="hidden xl:block"></div>
          {allPackages.map((item) => {
            return (
              <Fragment key={item.title}>
                <PackageCard item={item} />
              </Fragment>
            );
          })}
          <div className="hidden xl:block"></div>
        </div>
      </section>
    </>
  );
}

export default Packages;
