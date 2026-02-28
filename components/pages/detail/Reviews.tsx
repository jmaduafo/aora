"use client";

import { Button } from "@/components/ui/button";
import PurchaseButton from "@/components/ui/buttons/PurchaseButton";
import ReviewCard from "@/components/ui/cards/ReviewCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import Header3 from "@/components/ui/headings/Header3";
import Header4 from "@/components/ui/headings/Header4";
import Header6 from "@/components/ui/headings/Header6";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Review } from "@/types/type";
import { ages, skin_concerns, skin_tone, skin_type } from "@/utils/data";
import { formatText, getRating } from "@/utils/helpers";
import { ArrowRight, ListFilter } from "lucide-react";
import React, { Fragment, useState } from "react";
import { FaStar } from "react-icons/fa6";

function Reviews() {
  const [rating, setRating] = useState([5]);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

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
      skinTone: "MEDIUM",

      isVerifiedPurchase: true,

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
          <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
            <DialogTrigger className="flex items-center gap-2 group">
              <Header4 text="Write a Review" className="font-montrealMedium" />
              <ArrowRight className="size-7 group-hover:translate-x-3 duration-300" />
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
              <DialogHeader>
                <DialogTitle>Review form</DialogTitle>
              </DialogHeader>
              <form>
                <FieldGroup>
                  <FieldSet>
                    <FieldGroup>
                      <div className="grid grid-cols-2 gap-3">
                        <Field>
                          <FieldLabel htmlFor="first_name">
                            First name
                          </FieldLabel>
                          <Input
                            id="first_name"
                            name="first_name"
                            autoComplete="off"
                            placeholder="John"
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="last_name">Last name</FieldLabel>
                          <Input
                            id="last_name"
                            name="last_name"
                            autoComplete="off"
                            placeholder="Doe"
                          />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          autoComplete="off"
                          placeholder="user@example.com"
                        />
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  <FieldSeparator />
                  <FieldSet>
                    <FieldGroup>
                      <FieldLegend>Skin Information</FieldLegend>
                      <div className="grid grid-cols-2 gap-x-3 gap-y-7">
                        <Field>
                          <FieldLabel htmlFor="age">Age Range</FieldLabel>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue
                                id="age"
                                placeholder="Select your age range"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Age</SelectLabel>
                                {ages.map((item) => {
                                  return (
                                    <SelectItem key={item} value={item}>
                                      {formatText(item)}
                                    </SelectItem>
                                  );
                                })}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="skin_type">Skin Type</FieldLabel>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue
                                id="skin_type"
                                placeholder="Select your skin type"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Skin Type</SelectLabel>
                                {skin_type.map((item) => {
                                  return (
                                    <SelectItem key={item} value={item}>
                                      {formatText(item)}
                                    </SelectItem>
                                  );
                                })}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="skin_tone">Skin Tone</FieldLabel>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue
                                id="skin_tone"
                                placeholder="Select your skin tone"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Skin Tone</SelectLabel>
                                {skin_tone.map((item) => {
                                  return (
                                    <SelectItem key={item} value={item}>
                                      {formatText(item)}
                                    </SelectItem>
                                  );
                                })}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="skin_concern">
                            Skin Concern
                          </FieldLabel>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue
                                id="skin_concern"
                                placeholder="Select your skin concern"
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Skin Concerns</SelectLabel>
                                {skin_concerns.map((item) => {
                                  return (
                                    <SelectItem key={item} value={item}>
                                      {formatText(item)}
                                    </SelectItem>
                                  );
                                })}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </Field>
                      </div>
                    </FieldGroup>
                  </FieldSet>
                  <FieldSeparator />
                  <FieldSet>
                    <FieldGroup>
                      <FieldLegend>Customer Review</FieldLegend>
                      <Field>
                        <div className="flex items-center justify-between">
                          <FieldLabel htmlFor="rating">Rating</FieldLabel>
                          <span className="text-sm">{rating}</span>
                        </div>
                        <Slider
                          id="rating"
                          name="rating"
                          defaultValue={[1]}
                          max={5}
                          min={1}
                          step={1}
                          value={rating}
                          onValueChange={setRating}
                          className="w-full"
                        />
                        <FieldDescription>
                          Please rate the product from 1 to 5
                        </FieldDescription>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="title">Title</FieldLabel>
                        <Input id="title" name="title" />
                        <FieldDescription>
                          Please give the review a title
                        </FieldDescription>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="comment">Review</FieldLabel>
                        <Textarea
                          id="comment"
                          name="comment"
                          placeholder="How do you feel about the product?"
                        />
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  <Field orientation="vertical">
                    <Button type="submit">Submit</Button>
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => setIsReviewOpen(false)}
                    >
                      Cancel
                    </Button>
                  </Field>
                </FieldGroup>
              </form>
            </DialogContent>
          </Dialog>
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
          {reviews.length === 1 && (
            <div className="mt-3">
              <PurchaseButton text="Show More" />
            </div>
          )}
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
