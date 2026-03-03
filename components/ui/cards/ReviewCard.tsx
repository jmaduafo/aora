"use client";

import { Review } from "@/types/type";
import React, { Fragment, useState } from "react";
import Header5 from "../headings/Header5";
import Paragraph from "../headings/Paragraph";
import { format } from "timeago.js";
import Header6 from "../headings/Header6";
import { checkForS, formatText, getRating } from "@/utils/helpers";
import LikeButton from "../buttons/LikeButton";
import { Button } from "../button";
import { Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../alert-dialog";
import { deleteReview } from "@/prisma/actions";
import { toast } from "sonner";
import Loading from "../loading/Loading";

type Card = {
  readonly item: Review;
  readonly user_id: string;
};

function ReviewCard({ item, user_id }: Card) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function deleteCard(userId: string, productId: string) {
    setIsLoading(true);
    try {
      await deleteReview(userId, productId);

      toast.success("Success!", {
        description: "Your review was deleted successfully",
      });
    } catch (err: any) {
      toast.error("Something went wrong", {
        description: err.message,
      });
    } finally {
      setIsLoading(false);
      setIsAlertOpen(false)
    }
  }
  return (
    <div className="">
      <div className="flex justify-end">
        {user_id === item.userId && (
          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant={"link"} type="button">
                <Ellipsis />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {/* <DropdownMenuItem>Edit</DropdownMenuItem> */}
                <DropdownMenuItem
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAlertOpen(true);
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                review for this product.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                disabled={isLoading}
                onClick={() => deleteCard(user_id, item.productId)}
              >
                {isLoading ? <Loading/> : "Continue"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
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
        <p className="text-sm">{item.comment}</p>
      </div>
      <div className="flex justify-end mt-2">
        <LikeButton
          likes={item.helpfuls ? item.helpfuls.length : 0}
          desc="Helpful?"
        />
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
      <div className="flex gap-1">
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
    </div>
  );
}
