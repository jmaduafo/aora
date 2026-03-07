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
  FieldError,
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
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from "@/components/ui/combobox";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Product } from "@/types/type";
import {
  ages,
  reviewSort,
  skin_concerns,
  skin_tone,
  skin_type,
} from "@/utils/data";
import {
  averageRating,
  formatText,
  getFullName,
  getRating,
  ratingRanking,
} from "@/utils/helpers";
import {
  ArrowRight,
  ArrowUpDown
} from "lucide-react";
import React, { Fragment, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ReviewSchema } from "@/zod/validation";
import * as z from "zod";
import { createReview } from "@/prisma/actions";
import { toast } from "sonner";
import Loading from "@/components/ui/loading/Loading";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFilterReviewStore } from "@/zustand/store";

function Reviews({ product }: { readonly product: Product | undefined }) {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");

  const form = useForm<z.infer<typeof ReviewSchema>>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      rating: [5],
      comment: "",
      age: "",
      skinTone: "",
      skinType: "",
      skinConcern: [],
    },
  });

  const { filterItems, reviews, setReviews } = useFilterReviewStore();

  useEffect(() => {
    const user_id = localStorage.getItem("aora_id");

    user_id ? setUserId(user_id) : setUserId("");
  }, []);

  useEffect(() => {
    if (product?.reviews) {
      setReviews(product.reviews);
    }
  }, [product]);

  async function onSubmit(data: z.infer<typeof ReviewSchema>) {
    setIsLoading(true);

    try {
      if (!userId.length || !product) {
        toast.error("Something went wrong", {
          description:
            "We could not identify your user ID. Please refresh the page and try again.",
        });
        return;
      }

      await createReview({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        fullName: getFullName(data.firstName.trim(), data.lastName.trim()),
        email: data.email.trim(),
        title: data.title.trim(),
        rating: data.rating[0],
        comment: data.comment.trim(),
        age: data.age,
        skinTone: data.skinTone,
        skinType: data.skinType,
        skinConcern: data.skinConcern,
        userId: userId,
        product: {
          connect: { id: product.id },
        },
      });

      toast.success("Success!", {
        description:
          "Your review was submitted successfully and is pending approval.",
        duration: Infinity,
      });

      setIsReviewOpen(false);
      form.reset();
    } catch (err: any) {
      if (err.message.toLowerCase().includes("unique constraint failed")) {
        toast.error("Something went wrong", {
          description:
            "You have already written a review for this product. Users are allowed one review per product.",
          duration: Infinity,
        });

        return;
      }

      toast.error("Something went wrong", {
        description: err.message,
        duration: Infinity,
      });

      return;
    } finally {
      setIsLoading(false);
    }
  }

  const sort = (type: string, order: string) => {
    filterItems(type, order);
  };

  return (
    <section className="mt-[15vh]">
      <div className="flex flex-col lg:flex-row gap-[5vw]">
        <div>
          <Header3
            className="font-montrealMedium"
            text={`Reviews ( ${product?.reviews?.length} )`}
          />
          <div className="flex items-center gap-4 mt-[6vh]">
            <Header4
              text={`${Number.isNaN(averageRating(reviews.map((item) => item.rating))) ? "No reviews yet" : averageRating(reviews?.map((item) => item.rating)).toFixed(2)}`}
              className="font-montrealMedium"
            />
            {getRating(
              reviews ? averageRating(reviews?.map((item) => item.rating)) : 0,
              "size-5",
            )}
          </div>
          <div className="grid gap-2 mt-5">
            {ratingRanking(reviews.map((item) => item.rating)).map((item) => {
              return (
                <Fragment key={item.rating}>
                  <RatingBar rating={item.rating} percentage={item.percent} />
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          {/* WRITE A REVIEW */}
          <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
            <DialogTrigger className="flex items-center gap-2 group">
              <Header4 text="Write a Review" className="font-montrealMedium" />
              <ArrowRight className="size-7 group-hover:translate-x-3 duration-300" />
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
              <DialogHeader>
                <DialogTitle>Review form</DialogTitle>
              </DialogHeader>
              {/* REVIEW FORM POP UP */}
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                  <FieldSet>
                    <FieldGroup>
                      <div className="grid grid-cols-2 gap-3">
                        {/* FIRST NAME */}
                        <Controller
                          name="firstName"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="first_name">
                                First name *
                              </FieldLabel>
                              <Input
                                {...field}
                                aria-invalid={fieldState.invalid}
                                id={field.name}
                                autoComplete="off"
                                placeholder="John"
                              />
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                        {/* LAST NAME */}
                        <Controller
                          name="lastName"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor={field.name}>
                                Last name *
                              </FieldLabel>
                              <Input
                                {...field}
                                aria-invalid={fieldState.invalid}
                                id={field.name}
                                autoComplete="off"
                                placeholder="Doe"
                              />
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                      </div>
                      {/* EMAIL */}
                      <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>
                              Email *
                            </FieldLabel>
                            <Input
                              {...field}
                              aria-invalid={fieldState.invalid}
                              id={field.name}
                              autoComplete="off"
                              placeholder="user@example.com"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />
                    </FieldGroup>
                  </FieldSet>
                  <FieldSeparator />
                  <FieldSet>
                    <FieldGroup>
                      <FieldLegend>Skin Information</FieldLegend>
                      <div className="grid grid-cols-2 gap-x-3 gap-y-7">
                        {/* AGE RANGE */}
                        <Controller
                          name="age"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="age">Age Range *</FieldLabel>
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                                aria-invalid={fieldState.invalid}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue
                                    id={field.name}
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
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                        {/* SKIN TYPE */}
                        <Controller
                          name="skinType"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <FieldLabel htmlFor="skin_type">
                                Skin Type
                              </FieldLabel>
                              <Select
                                value={field.value ?? ""}
                                onValueChange={field.onChange}
                              >
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
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                        {/* SKIN TONE */}
                        <Controller
                          name="skinTone"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invaid={fieldState.invalid}>
                              <FieldLabel htmlFor="skin_tone">
                                Skin Tone *
                              </FieldLabel>
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
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
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                        {/* SKIN CONCERNS */}
                        <Controller
                          name="skinConcern"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invaid={fieldState.invalid}>
                              <FieldLabel htmlFor="skin_concern">
                                Skin Concerns
                              </FieldLabel>
                              <Combobox
                                modal={false}
                                items={skin_concerns}
                                multiple
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <ComboboxChips>
                                  <ComboboxValue>
                                    {field.value?.map((item) => (
                                      <ComboboxChip key={item}>
                                        {formatText(item)}
                                      </ComboboxChip>
                                    ))}
                                  </ComboboxValue>
                                  <ComboboxChipsInput
                                    placeholder={
                                      field.value && field.value?.length >= 3
                                        ? undefined
                                        : "Add concern"
                                    }
                                  />
                                </ComboboxChips>
                                <ComboboxContent>
                                  <ComboboxEmpty>No items found.</ComboboxEmpty>
                                  <ComboboxList>
                                    {(item) => (
                                      <ComboboxItem
                                        disabled={
                                          field.value !== null &&
                                          field.value?.length >= 3
                                        }
                                        key={item}
                                        value={item}
                                      >
                                        {formatText(item)}
                                      </ComboboxItem>
                                    )}
                                  </ComboboxList>
                                </ComboboxContent>
                              </Combobox>
                              {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                              )}
                            </Field>
                          )}
                        />
                      </div>
                    </FieldGroup>
                  </FieldSet>
                  <FieldSeparator />
                  <FieldSet>
                    <FieldGroup>
                      <FieldLegend>Customer Review</FieldLegend>
                      {/* RATING */}
                      <Controller
                        name="rating"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <div className="flex items-center justify-between">
                              <FieldLabel htmlFor={field.name}>
                                Rating *
                              </FieldLabel>
                              <span className="text-sm">{field.value}</span>
                            </div>
                            <Slider
                              id={field.name}
                              max={5}
                              min={1}
                              step={1}
                              value={field.value}
                              onValueChange={field.onChange}
                              className="w-full"
                            />
                            <FieldDescription>
                              Please rate the product from 1 to 5
                            </FieldDescription>
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />
                      {/* TITLE */}
                      <Controller
                        name="title"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>
                              Title *
                            </FieldLabel>
                            <Input
                              {...field}
                              aria-invalid={fieldState.invalid}
                              id={field.name}
                              autoComplete="off"
                            />
                            <FieldDescription>
                              Please give the review a title
                            </FieldDescription>
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />
                      {/* REVIEW COMMENT */}
                      <Controller
                        name="comment"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>
                              Review *
                            </FieldLabel>
                            <Textarea
                              {...field}
                              aria-invalid={fieldState.invalid}
                              id={field.name}
                              placeholder="How do you feel about the product?"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />
                    </FieldGroup>
                  </FieldSet>
                  {/* SUBMIT & CANCEL BUTTONS */}
                  <Field orientation="vertical">
                    {isLoading ? (
                      <Button type="button" disabled>
                        <Loading />
                      </Button>
                    ) : (
                      <Button type="submit">Submit</Button>
                    )}
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
          {/* SORT BY DROPDOWN MENU */}
          <div className="py-2 flex justify-end border-y-[1.5px] mt-5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"ghost"}>
                  <ArrowUpDown strokeWidth={1} />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Sort</DropdownMenuLabel>
                  {reviewSort.map((item) => {
                    return (
                      <DropdownMenuItem
                        key={`${item.type} ${item.order}`}
                        onClick={() => sort(item.type, item.order)}
                        className="capitalize"
                      >
                        <item.icon /> {item.type}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* REVIEW CARD RENDER */}
          <div>
            {reviews.length ? (
              reviews.map((item, i) => {
                return (
                  <div
                    key={item.id}
                    className={`py-4 ${i !== reviews?.length - 1 && "border-b border-b-foreground/20"}`}
                  >
                    <ReviewCard user_id={userId} item={item} />
                  </div>
                );
              })
            ) : (
              <div className="mt-[10vh] flex justify-center">
                <Header6 text="Be the first to review" />
              </div>
            )}
          </div>
          {/* SHOW MORE BUTTON */}
          {reviews.length >= 3 && (
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
