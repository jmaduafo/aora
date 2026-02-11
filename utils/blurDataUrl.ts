export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f3f3f3" offset="20%" />
      <stop stop-color="#ecebeb" offset="50%" />
      <stop stop-color="#f3f3f3" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f3f3f3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate
    xlink:href="#r"
    attributeName="x"
    from="-${w}"
    to="${w}"
    dur="1.2s"
    repeatCount="indefinite"
  />
</svg>
`

export const toBase64 = (str: string) =>
  globalThis.window === undefined
    ? Buffer.from(str).toString('base64')
    : globalThis.btoa(str)