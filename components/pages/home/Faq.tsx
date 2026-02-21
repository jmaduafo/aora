import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FlipText from "@/components/ui/animations/FlipText";
import Header2 from "@/components/ui/headings/Header2";
import Header4 from "@/components/ui/headings/Header4";
import Paragraph from "@/components/ui/headings/Paragraph";
import { frequent_questions } from "@/utils/data";
import React from "react";

function Faq() {
  return (
    <section className="my-[15vh]">
      <div className="w-full lg:w-[80%] xl:w-[70%] ml-auto lg:pr-[10vw]">
        <div>
          <Header2
            texts={[
              {
                text: "faq",
                is_special: true,
              },
            ]}
          />
        </div>
        <div className="mt-16">
          <Accordion
            type="single"
            collapsible
            defaultValue={undefined}
            className="border-b-[1.5px] border-t-[1.5px]"
          >
            {frequent_questions.map((item, i) => {
              return (
                <AccordionItem
                  value={`item-${i + 1}`}
                  key={item.question}
                  className=""
                >
                  <AccordionTrigger className="group" showIcon>
                    <div className="flex-1 flex items-start gap-4">
                      <Paragraph
                        text={`${(i + 1).toString().padStart(2, "0")} /`}
                        className="whitespace-nowrap"
                      />
                      <FlipText>
                        <Header4 text={item.question} />
                      </FlipText>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex items-start gap-4">
                      <Paragraph
                        text={`${(i + 1).toString().padStart(2, "0")} /`}
                        className="invisible"
                      />
                      <Paragraph text={item.answer} />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
