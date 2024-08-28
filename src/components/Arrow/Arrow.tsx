import type { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" opacity={0.1} />
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 16V8M9 13l2.913 2.913v0a.123.123 0 0 0 .174 0v0L15 13"
    />
  </svg>
)
export default SvgComponent
