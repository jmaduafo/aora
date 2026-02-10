import React from "react";
import { ArrowUpRight } from "lucide-react";
import Paragraph from "../headings/Paragraph";

function PackageButton({
  text,
  action,
}: {
  readonly text: string;
  readonly action?: () => void;
}) {
  return (
    <button
      onClick={action}
      className="flex items-center justify-center gap-2 bg-foreground text-background py-1 w-full rounded-full group"
    >
      <span>
        {<Paragraph text={text} />}
      </span>
      <span className="group-hover:translate-x-1 duration-300">
        <ArrowUpRight className="" strokeWidth={1} />
      </span>
    </button>
  );
}

export default PackageButton;
