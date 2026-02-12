import React, { Fragment } from "react";
import Paragraph from "../headings/Paragraph";
import { FooterList } from "@/types/type";
import { contact, legal, navLinks, socials } from "@/utils/data";
import { SendHorizonal } from "lucide-react";

function Footer() {
  return (
    <footer className="px-6 py-12 bg-foreground text-background grid lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <List title="Links" list={navLinks} />
          <List title="Socials" list={socials} />
          <List title="Legal terms" list={legal} />
          <List title="Contact Info" list={contact} />
        </div>
        <p className="uppercase text-[10vw] lg:text-[7vw] leading-none font-montrealMedium">
          info@aora.com
        </p>
      </div>
      <div className="lg:col-span-1 flex flex-col-reverse lg:flex-col items-end">
        <p className="uppercase text-[7vw] lg:text-[3em] leading-none font-montrealMedium">
          aora &copy; 2026
        </p>
        <div className="mt-auto w-full mb-6 lg:mb-0">
          <Paragraph text="Subscribe"/>
          <div className="mt-2 flex items-center gap-3 bg-background text-foreground rounded-full p-1.5">
            <input className="flex-1 text-sm pl-3 outline-none border-none" placeholder="Enter email"/>
            <button className="p-2 bg-foreground text-background rounded-full">
              <SendHorizonal className="w-4 h-4" strokeWidth={1}/>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

type Column = {
  readonly title: string;
  readonly list: FooterList[];
};

function List({ title, list }: Column) {
  return (
    <div>
      <Paragraph text={title} className="font-montrealMedium" />
      <div className="mt-2 flex flex-col gap-1">
        {list.map((item) => {
          return (
            <Fragment key={item.title}>
              <Paragraph text={item.title} className="" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
