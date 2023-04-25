import { styled, Theme } from '@mui/material/styles'
import { useMemo } from 'react'

interface DotsProps {
  theme?: Theme
  themename: string
}

const DotsSvg = styled('svg')<DotsProps>(({ theme, themename }) => {
  const strokeColor = useMemo(() => {
    if (themename === 'dark') {
      return '#E6511B'
    }
    if (
      themename === 'light' ||
      themename === 'yellow' ||
      themename === 'orange'
    ) {
      return '#000000'
    }
  }, [themename])
  return {
    position: 'relative',
    left: '274px',
    bottom: '355px',
    height: '748px',
    width: '4px',
    zIndex: -1,
    transform: 'rotate(90deg)',
    '& path': {
      stroke: strokeColor
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
})

interface Props {
  themename: string
}

export default function DotsMobile ({ themename }: Props): JSX.Element {
  return (
    <DotsSvg
      themename={themename}
      xmlns='http://www.w3.org/2000/svg'
      width='4'
      height='253.5'
      viewBox='0 0 4 253.5'
      preserveAspectRatio='none'
    >
      <g transform='translate(-1149 -308.5)'>
        <path
          d='M-10733.833,9988.96v86.475'
          transform='translate(11884.833 -9680.46)'
          fill='none'
          strokeWidth='4'
          strokeDasharray='7 8'
        />
        <path
          d='M-10733.833,9988.959v33.438'
          transform='translate(11884.833 -9460.397)'
          fill='none'
          strokeWidth='4'
          strokeDasharray='7 8'
        />
        <path
          d='M-10733.833,9988.961v110.828'
          transform='translate(11884.833 -9587.114)'
          fill='none'
          strokeWidth='4'
          strokeDasharray='6 0'
        />
      </g>
    </DotsSvg>
  )
}
