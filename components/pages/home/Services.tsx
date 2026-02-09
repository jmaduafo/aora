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
      <div className="w-full sm:w-[85%] lg:w-[70%] xl:w-[60%] mx-auto mt-[10vh]">
        <Accordion
          type="single"
          collapsible
          defaultValue={undefined}
          className="border-b-[1.5px] border-t-[1.5px]"
        >
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
                    className="whitespace-nowrap"
                  />
                  <FlipText>
                    <Header3 text={item.name} className="text-center" />
                  </FlipText>
                  <Paragraph
                    text={item.duration + " mins"}
                    className="whitespace-nowrap"
                  />
                </AccordionTrigger>
                <AccordionContent>
                  <span className="flex flex-col gap-2 items-center">
                    {item.services.map((service, i) => {
                      return (
                        <span key={service} className="inline-flex place-items-center space-x-2">
                          <span className="inline-flex w-1.5 h-1.5 rounded-xs bg-foreground"></span>
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
