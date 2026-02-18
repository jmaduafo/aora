import React from "react";

function PurchaseButton({
  text,
  action,
}: {
  readonly text: string;
  readonly action?: () => void;
}) {
  return (
    <button
      onClick={action}
      className="py-3 w-full hover:opacity-75 duration-300 bg-foreground text-background uppercase"
    >
      {text}
    </button>
  );
}

export default PurchaseButton;
