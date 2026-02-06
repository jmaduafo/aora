import React from "react";
import Header5 from "../headings/Header5";
import Header6 from "../headings/Header6";

function BookButton({ text }: { readonly text: string }) {
  return (
    <button className="bg-foreground text-background flex gap-2 items-center py-2 px-4 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-background"></span>
      <span>
        <Header6 text={text} />
      </span>
    </button>
  );
}

export default BookButton;
