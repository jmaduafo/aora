import { Review } from "@/types/type";
import React, { Fragment } from "react";
import Header5 from "../headings/Header5";
import Paragraph from "../headings/Paragraph";
import { format } from "timeago.js";
import Header6 from "../headings/Header6";
import { checkForS, formatText, getRating } from "@/utils/helpers";
import LikeButton from "../buttons/LikeButton";

type Card = {
  readonly item: Review;
};

function ReviewCard({ item }: Card) {
  return (
    <div className="">
      <div className="flex justify-between gap-3">
        <Header5 text={item.title} className="font-montrealMedium" />
        <p className="font-montrealMedium uppercase text-xs text-foreground/50">
          {format(item.createdAt)
            .replace("minute", "min")
            .replace("hour", "hr")
            .replace("second", "sec")}
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <Header6 text={item.fullName} className="font-montrealMedium" />
        {getRating(item.rating, "size-3")}
      </div>
      <div className="flex items-start gap-8 mt-5">
        <AdditionalInfo title="Skin type" content={[item.skinType]} />
        <AdditionalInfo
          title={`Skin Concern${checkForS(item.skinConcern.length)}`}
          content={item.skinConcern}
        />
        <AdditionalInfo title="Age" content={[item.age]} />
      </div>
      <div className="mt-6">
        <Paragraph text={item.comment} />
      </div>
      <div className="flex justify-end mt-2">
        <LikeButton likes={item.helpfulCount} desc="Helpful?" />
      </div>
    </div>
  );
}

export default ReviewCard;

function AdditionalInfo({
  title,
  content,
}: {
  readonly title: string;
  readonly content: string[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <Paragraph
        text={title}
        className="text-xs uppercase text-foreground/50 whitespace-nowrap font-montrealMedium"
      />

      {content.map((text, i) => {
        return (
          <Fragment key={text}>
            <Paragraph
              text={`${formatText(text)}${i === content.length - 1 ? "" : ", "}`}
              className="text-xs uppercase whitespace-nowrap font-montrealMedium"
            />
          </Fragment>
        );
      })}
    </div>
  );
}
