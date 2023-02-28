import * as React from 'react'
import { SVGProps } from 'react'

const IconHeart = React.memo((props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <path
      d="M28.343 17.48 16 29 3.657 17.48A8.365 8.365 0 0 1 9.365 3h.17c2.219 0 4.346.881 5.915 2.45L16 6l.55-.55A8.364 8.364 0 0 1 22.465 3h.17A8.365 8.365 0 0 1 31 11.365a8.363 8.363 0 0 1-2.657 6.115z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </svg>
))

export default IconHeart
IconHeart.displayName = 'ICONHEAER'
