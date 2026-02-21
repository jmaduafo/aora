import { Button } from "@/components/ui/button";
import PurchaseButton from "@/components/ui/buttons/PurchaseButton";
import ReviewCard from "@/components/ui/cards/ReviewCard";
import Header3 from "@/components/ui/headings/Header3";
import Header4 from "@/components/ui/headings/Header4";
import Header6 from "@/components/ui/headings/Header6";
import { Progress } from "@/components/ui/progress";
import { Review } from "@/types/type";
import { getRating } from "@/utils/helpers";
import { ArrowRight, ListFilter } from "lucide-react";
import React, { Fragment } from "react";
import { FaStar } from "react-icons/fa6";

function Reviews() {
  const reviews: Review[] = [
    {
      id: "nsjdhwhjdsncjsd",
      productId: "dsjsjjhcjsd",
      firstName: "Trent",
      lastName: "Powers",
      fullName: "Trent Powers",
      email: "trent@gmail.com",
      rating: 3,
      title: "Great product!",
      comment: "xo tatted all over her body ooh oh",

      age: "AGE_65_PLUS",
      skinType: "COMBINATION",
      skinConcern: ["HYPERPIGMENTATION", "DARK_SPOTS"],

      isVerifiedPurchase: true,
      helpfulCount: 0,
      status: "APPROVED",
      createdAt: new Date("12-11-2025"),
    },
  ];
  return (
    <section className="mt-[15vh]">
      <div className="flex flex-col lg:flex-row gap-[5vw]">
        <div>
          <Header3 className="font-montrealMedium" text={`Reviews ( 0 )`} />
          <div className="flex items-center gap-4 mt-[6vh]">
            <Header4
              text={`${(4.5).toFixed(2)}`}
              className="font-montrealMedium"
            />
            {getRating(4.5, "size-5")}
          </div>
          <div className="grid gap-2 mt-5">
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <Fragment key={`item-${i + 1}`}>
                  <RatingBar rating={5 - i} percentage={45} />
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <button className="flex items-center gap-2 group">
            <Header4 text="Write a Review" className="font-montrealMedium" />
            <ArrowRight className="size-7 group-hover:translate-x-3 duration-300" />
          </button>
          <div className="py-2 flex justify-end border-y-[1.5px] mt-5">
            <Button variant={"ghost"}>
              <ListFilter />
              Filter
            </Button>
          </div>
          <div>
            {reviews.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className={`py-4 ${i !== reviews.length - 1 && "border-b border-b-foreground/20"}`}
                >
                  <ReviewCard item={item} />
                </div>
              );
            })}
          </div>
          {reviews.length === 1 && <div className="mt-3"><PurchaseButton text="Show More"/></div>}
        </div>
      </div>
    </section>
  );
}

export default Reviews;

function RatingBar({
  rating,
  percentage,
}: {
  readonly rating: number;
  readonly percentage: number;
}) {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex items-center gap-0.5 w-6">
        <Header6 text={`${rating}`} className="font-montrealMedium" />
        <FaStar className="size-3" />
      </div>
      <Progress value={percentage} className="w-40" />
      <Header6 text={`${percentage}%`} className="font-montrealMedium" />
    </div>
  );
}
