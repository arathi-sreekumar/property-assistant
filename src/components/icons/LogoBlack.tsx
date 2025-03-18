import * as React from 'react'
import type { SVGProps } from 'react'
const SvgLogoBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      stroke="#161F1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M32 8 8 28h6v24h12V38h12v14h12V28h6z"
    />
    <text
      x={22}
      y={34}
      fill="#161F1E"
      fontFamily="Arial, sans-serif"
      fontSize={18}
      fontWeight="bold"
    >
      {'$$'}
    </text>
  </svg>
)
export default SvgLogoBlack
