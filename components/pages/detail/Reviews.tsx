import { Button } from "@/components/ui/button";
import Header3 from "@/components/ui/headings/Header3";
import Header4 from "@/components/ui/headings/Header4";
import Header5 from "@/components/ui/headings/Header5";
import Header6 from "@/components/ui/headings/Header6";
import Paragraph from "@/components/ui/headings/Paragraph";
import { Progress } from "@/components/ui/progress";
import { getRating } from "@/utils/helpers";
import { ArrowRight, ListFilter } from "lucide-react";
import React, { Fragment } from "react";
import { FaStar } from "react-icons/fa6";

function Reviews() {
  return (
    <section className="mt-[15vh]">
      <div className="flex gap-[6vw]">
        <div>
          <Header3 className="font-montrealMedium" text={`Reviews ( 0 )`} />
          <div className="flex items-center gap-4 mt-[6vh]">
            <Header4 text={`${4.5.toFixed(2)}`} className="font-montrealMedium"/>
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
                <Header4 text="Write a Review" className="font-montrealMedium"/>
                <ArrowRight className="size-7 group-hover:translate-x-3 duration-300"/>
            </button>
            <div className="py-2 flex justify-end border-y-[1.5px] mt-5">
                <Button variant={"ghost"}>
                    <ListFilter/>
                    Filter
                </Button>
            </div>
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
