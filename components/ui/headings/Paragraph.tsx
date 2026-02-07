import React from 'react'

function Paragraph({
  text,
  className,
}: {
  readonly text: string;
  readonly className?: string;
}) {
  return (
    <p className={`${className} text-xs lg:text-sm uppercase leading-none`}>{text}</p>
  )
}

export default Paragraph