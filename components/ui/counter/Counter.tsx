"use client";
import { Minus, Plus } from "lucide-react";
import React from "react";
import Paragraph from "../headings/Paragraph";
import { useCartStore } from "@/zustand/store";

function Counter({
  count,
  setCount,
  quantity,
  size,
  id,
}: {
  readonly count: number;
  readonly setCount: React.Dispatch<React.SetStateAction<number>>;
  readonly id?: string;
  readonly quantity?: number;
  readonly size?: string;
}) {
  const { updateQuantity } = useCartStore();

  return (
    <div>
      <div className="w-fit p-2 border border-foreground flex items-center gap-5">
        <button
          onClick={() => {
            if (count > 1) {
              setCount((prev) => prev - 1);
              id && updateQuantity(id, count - 1);
            }
          }}
          className={`${count <= 1 ? "opacity-50 cursor-not-allowed!" : "opacity-100"}`}
        >
          <Minus className={size ?? "size-4"} strokeWidth={1} />
        </button>
        <Paragraph text={`${count}`} />
        <button
          onClick={() => {
            if ( quantity && count < quantity) {
              setCount((prev) => prev + 1);
              id && updateQuantity(id, count + 1);
            }
          }
          }
          className={`${quantity && count >= quantity ? "opacity-50 cursor-not-allowed!" : "opacity-100"}`}
        >
          <Plus className={size ?? "size-4"} strokeWidth={1} />
        </button>
      </div>
      {/* {count >= 10 && <p className="text-xs uppercase mt-1">Customers are allowed a max of 10 items</p>} */}
    </div>
  );
}

export default Counter;
