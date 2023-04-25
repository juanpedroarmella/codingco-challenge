import { styled, Theme } from '@mui/material/styles'
import { useMemo } from 'react'

interface HexSvgProps {
  theme?: Theme
  themename: string
}

const HexSvg = styled('svg')<HexSvgProps>(({ themename, theme }) => {
  const strokeColor = useMemo(() => {
    if (themename === 'dark') {
      return '#E6511B'
    }
    if (themename === 'light') {
      return '#FF1F57'
    }
    if (themename === 'yellow') {
      return '#000000'
    }
    if (themename === 'orange') {
      return '#37A87E'
    }
  }, [themename])
  return {
    position: 'relative',
    width: '147px',
    height: '170px',
    top: '-90px',
    left: '10px',
    zIndex: 0,
    '& path': {
      fill: theme.palette.background.default,
      stroke: strokeColor
    },
    [theme.breakpoints.down('sm')]: {
      width: '104px',
      height: '121px',
      top: '-675px',
      left: '36px'
    }
  }
})

interface Props {
  themename: string
}

export default function Hex ({ themename }: Props): JSX.Element {
  return (
    <HexSvg
      themename={themename}
      xmlns='http://www.w3.org/2000/svg'
      width='156.064'
      height='180.206'
      viewBox='0 0 156.064 180.206'
    >
      <path
        d='M127.361,0H42.454L0,73.532l42.454,73.532h84.907l42.454-73.532Z'
        transform='translate(4.5 175.01) rotate(-90)'
        fill='none'
        stroke='#e6511b'
        strokeWidth='9'
      />
    </HexSvg>
  )
}
