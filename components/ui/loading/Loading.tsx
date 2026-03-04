import { LoaderCircle } from 'lucide-react'
import React from 'react'

function Loading({ size }: { readonly size?: string}) {
  return (
    <div className='animate-spin'>
        <LoaderCircle className={size ?? "size-5"} strokeWidth={1.5}/>
    </div>
  )
}

export default Loading