"use server"

import { prisma } from "@/prisma/client"

export async function createReview(data: any) {
  return await prisma.review.create({
    data,
  })
}