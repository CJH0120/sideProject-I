import * as React from 'react'
import { SVGProps } from 'react'

const IconHamburger = React.memo((props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-5-8v-2h10v2H6Zm0 3v-2h10v2H6Zm0-6V7h10v2H6Z"
      fill="#FC0"
    />
  </svg>
))
IconHamburger.displayName = 'IconHamburger'
export default IconHamburger
