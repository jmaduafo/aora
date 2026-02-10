import Header2 from "@/components/ui/headings/Header2";
import Paragraph from "@/components/ui/headings/Paragraph";
import React from "react";

function Packages() {
  return (
    <section className="mt-[15vh]">
      <div className="flex flex-col items-center">
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
            <Paragraph className="w-[18em]" text="AORA has thoughtfully curated packages designed to restore balance, deepen relaxation, and invite moments of quiet renewal."/>
        </div>
      </div>
    </section>
  );
}

export default Packages;
