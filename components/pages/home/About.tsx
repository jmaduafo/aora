import Header2 from "@/components/ui/headings/Header2";
import Image from "next/image";
import React from "react";
import About1 from "@/public/images/home/about1.jpg";
import About2 from "@/public/images/home/about2.jpg";
import Paragraph from "@/components/ui/headings/Paragraph";

function About() {
  const transitionLine1 = [
    {
      text: "Serenity",
      is_special: true,
    },
    {
      text: "in",
    },
  ];

  const transitionLine2 = [
    {
      text: "every",
    },
    {
      text: "detail",
    },
  ];

  return (
    <div className="mt-[30vh] xl:mt-[15vh]">
      {/* TRANSITION SECTION */}
      <section className="">
        <div className="flex flex-col items-center">
          <div className="pr-[8vw]">
            <Header2 texts={transitionLine1} />
          </div>
          <div className="pl-[8vw]">
            <Header2 texts={transitionLine2} />
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section>
        <div className="w-full sm:w-[85%] md:w-[65%] xl:w-[50%] mx-auto flex gap-8 mt-15">
          <div className="flex-2">
            <div className="w-full object-cover object-bottom">
              <Image
                src={About1}
                alt="woman in bath with red flowers"
                className="w-full h-full"
                placeholder="blur"
              />
            </div>
            <div className="flex justify-end mt-6">
              <Paragraph
                className="w-[85%]"
                text="We exist to help our guests pause, breathe, and restore. AORA's treatments are designed to melt away stress, awaken the senses, and leave you with a lasting glow, inside and out."
              />
            </div>
          </div>
          <div className="flex-3 mt-[12vh]">
            <div className="flex justify-end mb-6">
              <Paragraph
                className="w-[75%]"
                text="Rooted in the Japanese art of simplicity and harmony, AORA is more than a spa — it is a retreat for mind and body. Our mission is to offer each guest a space of quiet renewal, where care is both a ritual and a restoration."
              />
            </div>
            <div className="w-full object-cover object-bottom">
              <Image
                src={About2}
                alt="woman in bath with red flowers"
                className="w-full h-full"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
