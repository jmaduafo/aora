"use client";
import React from "react";
import { BsHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import Loading from "../loading/Loading";

function LikeButton({
  likes,
  desc,
  action,
  isLiked,
  isLoading,
}: {
  readonly likes: number;
  readonly desc?: string;
  readonly action?: () => void;
  readonly isLiked: boolean;
  readonly isLoading: boolean;
}) {
  const displayThumb = isLiked ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />;
  return (
    <button
      onClick={action}
      className={`flex gap-2 items-center py-1 px-2 uppercase text-xs w-fit rounded-sm border-[1.5px] duration-200 hover:bg-foreground hover:text-background ${isLiked ? "bg-foreground text-background" : "bg-transparent text-foreground "}`}
    >
      <span className="flex gap-1 items-center">
        {isLoading ? <Loading size="size-3" /> : displayThumb}
        {likes}
      </span>
      {desc}
    </button>
  );
}

export default LikeButton;
