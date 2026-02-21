"use client";
import React, { useState } from "react";
import { BsHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";

function LikeButton({
  likes,
  desc,
  action,
}: {
  readonly likes: number;
  readonly desc?: string;
  readonly action?: () => void;
}) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <button
      onClick={() => setIsLiked((prev) => !prev)}
      className={`flex gap-2 items-center py-1 px-2 uppercase text-xs w-fit rounded-sm duration-200 hover:bg-foreground hover:text-background ${isLiked ? "bg-foreground text-background border-none" : "bg-transparent text-foreground border "}`}
    >
      <span className="flex gap-1 items-center">
        {isLiked ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />}
        {likes}
      </span>
      {desc}
    </button>
  );
}

export default LikeButton;
