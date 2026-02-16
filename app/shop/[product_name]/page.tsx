import MainPage from '@/components/pages/detail/MainPage'
import React from 'react'

async function page({ params }: { params: { product_name: string }}) {
  const { product_name } = await params
  return (
    <MainPage product_name={product_name}/>
  )
}

export default page