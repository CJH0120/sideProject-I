import * as React from 'react'
import { SVGProps } from 'react'

const IconRemove = React.memo((props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m9.8 7 3.6-3.6c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L7 4.2 3.4.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8L4.2 7 .6 10.6c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6L7 9.8l3.6 3.6c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.8L9.8 7Z"
      fill="#FC0"
    />
  </svg>
))

export default IconRemove
IconRemove.displayName = 'dasdsadssad'
