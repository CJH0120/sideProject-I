import * as React from 'react'
import { SVGProps } from 'react'

const IconPin2 = React.memo((props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M23 1H11L9 19h4l-2 12 12-20h-4z"
    />
  </svg>
))

export default IconPin2
IconPin2.displayName = 'ICONPIN2'
