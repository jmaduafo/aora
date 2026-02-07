import React from "react";
import Paragraph from "../headings/Paragraph";

function BookButton({ text }: { readonly text: string }) {
  return (
    <button className="bg-foreground text-background flex gap-2 items-center py-2 px-4 rounded-full hover:opacity-80 opacity-100 duration-300">
      <span className="w-1.5 h-1.5 rounded-full bg-background"></span>
      <span>
        <Paragraph text={text} />
      </span>
    </button>
  );
}

export default BookButton;
