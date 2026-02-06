import { SpecialText } from "@/types/type";
import React from "react";
import { viagram, swily } from "@/fonts/fonts";

function Header2({ texts }: { readonly texts: SpecialText[] }) {
  return (
    <h2 className="text-[35vw] leading-none">
      {texts.map((item, i) => {
        return (
          <span
            key={`${item.text}_${i + 1}`}
            className={`${item.is_special ? swily.className : viagram.className}`}
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
