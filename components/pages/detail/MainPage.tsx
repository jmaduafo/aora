import prisma from '@/prisma/client'
import { deSlug } from '@/utils/helpers'
import React from 'react'
import Detail from './Detail'
import { Product } from '@/types/type'

async function MainPage({ product_name }: { readonly product_name: string}) {
    const detail = await prisma.product.findFirst({
        where: {
            name: {
                equals: deSlug(product_name),
                mode: "insensitive"
            }
        }
    })

  return (
    <>
        <Detail data={detail as Product}/>
    </>
  )
}

export default MainPage