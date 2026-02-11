import { SpecialText } from "@/types/type";
import React from "react";

function Header2({ texts }: { readonly texts: SpecialText[] }) {
  return (
    <h2 className="text-[12vw] lg:text-[8vw] leading-[0.75]">
      {texts.map((item, i) => {
        return (
          <span
            key={`${item.text}_${i + 1}`}
            className={`${item.is_special ? "font-swily" : "font-viagram"}`}
          >
            {item.text}
            {i === texts.length - 1 ? "" : " "}
          </span>
        );
      })}
    </h2>
  );
}

export default Header2;
