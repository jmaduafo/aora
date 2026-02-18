"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import Paragraph from "../headings/Paragraph";

function Counter({
  count,
  setCount,
  quantity,
}: {
  readonly count: number;
  readonly setCount: React.Dispatch<React.SetStateAction<number>>;
  readonly quantity: number;
}) {
  return (
    <div>
      <div className="w-fit p-2 border border-foreground flex items-center gap-5">
        <button
          onClick={() => count > 1 && setCount((prev) => prev - 1)}
          className={`${count <= 1 ? "opacity-50 cursor-not-allowed!" : "opacity-100"}`}
        >
          <Minus className="w-4 h-4" strokeWidth={1} />
        </button>
        <Paragraph text={`${count}`} />
        <button
          onClick={() =>
            count < quantity && setCount((prev) => prev + 1)
          }
          className={`${count >= quantity ? "opacity-50 cursor-not-allowed!" : "opacity-100"}`}
        >
          <Plus className="w-4 h-4" strokeWidth={1} />
        </button>
      </div>
      {/* {count >= 10 && <p className="text-xs uppercase mt-1">Customers are allowed a max of 10 items</p>} */}
    </div>
  );
}

export default Counter;
