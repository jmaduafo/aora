import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FlipText from "@/components/ui/animations/FlipText";
import Header2 from "@/components/ui/headings/Header2";
import Header3 from "@/components/ui/headings/Header3";
import Header6 from "@/components/ui/headings/Header6";
import Paragraph from "@/components/ui/headings/Paragraph";
import { services } from "@/utils/data";
import React from "react";

function Services() {
  return (
    <section className="mt-[15vh]">
      <div className="flex justify-center">
        <Header2
          texts={[
            {
              is_special: true,
              text: "services",
            },
          ]}
        />
      </div>
      <div className="w-[60%] mx-auto border-b-[1.5px] border-t-[1.5px] mt-[10vh]">
        <Accordion type="single" collapsible defaultValue={undefined}>
          {services.map((item, i) => {
            return (
              <AccordionItem
                value={`item-${i + 1}`}
                key={item.name}
                className="border-b-[1.5px]"
              >
                <AccordionTrigger>
                  <Paragraph
                    text={`${(i + 1).toString().padStart(2, "0")} /`}
                  />
                  <FlipText>
                    <Header3 text={item.name} />
                  </FlipText>
                  <Paragraph text={item.duration + " mins"} />
                </AccordionTrigger>
                <AccordionContent>
                  <span className="flex flex-col gap-2 items-center">
                    {item.services.map((service, i) => {
                      return (
                        <span key={service} className="">
                          <Header6 text={service} />
                        </span>
                      );
                    })}
                  </span>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

export default Services;
