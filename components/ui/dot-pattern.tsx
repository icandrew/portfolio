import { SVGProps } from 'react'

interface DotPatternProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'cx' | 'cy' | 'r'> {
  width?: number | string;
  height?: number | string;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`${x} ${y} ${width} ${height}`}
      className={className}
      {...props}
    >
      <circle
        cx={cx}
        cy={cy}
        r={cr}
        fill="currentColor"
      />
    </svg>
  )
}

export default DotPattern;
