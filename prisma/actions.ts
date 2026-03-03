"use server";

import { prisma } from "@/prisma/client";

// REVIEWS
export async function createReview(data: any) {
  return await prisma.review.create({
    data,
  });
}

export async function deleteReview(userId: string, productId: string) {
  return await prisma.review.delete({
    where: {
      userId_productId: {
        userId,
        productId,
      },
    },
  });
}

// HELPFULS

export async function createHelpful(userId: string, reviewId: string) {
  return await prisma.helpful.create({
    data: {
      userId,
      review: {
        connect: { id: reviewId },
      },
    },
  });
}

export async function deleteHelpful(userId: string, reviewId: string) {
  return await prisma.helpful.delete({
    where: {
      userId_reviewId: {
        userId,
        reviewId
      }
    },
  });
}
