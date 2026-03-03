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
        productId
      }
    },
  });
}
