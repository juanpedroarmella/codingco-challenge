import { styled, Theme } from '@mui/material/styles'
import { useMemo } from 'react'

interface DiagonalArrowProps {
  theme?: Theme
  themename: string
}

const DiagonalArrowSvg = styled('svg')<DiagonalArrowProps>(
  ({ theme, themename }) => {
    const strokeColor = useMemo(() => {
      if (themename === 'dark' || themename === 'orange') return '#E9E6E1'
      if (themename === 'light') return '#000000'
      if (themename === 'yellow') return '#707070'
    }, [themename])
    return {
      width: '35px',
      height: '38px',
      transform: 'rotate(-135deg)',
      position: 'absolute',
      bottom: '35%',
      right: '27%',
      '& path': {
        stroke: strokeColor
      },
      [theme.breakpoints.down('lg')]: {
        right: 0
      },
      [theme.breakpoints.down('md')]: {
        right: '5%',
        bottom: '10%'
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  }
)

interface Props {
  themename: string
}

export default function DiagonalArrow ({ themename }: Props): JSX.Element {
  return (
    <DiagonalArrowSvg
      themename={themename}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 33.114 40.366'
    >
      <g transform='translate(1.413 1.471)'>
        <path
          d='M10497.749-9940.029v-26.088l-8.239,8.642-4.294-4.094,15.589-16.356,14.7,16.238-4.4,3.984-7.424-8.2v25.87Z'
          transform='translate(-10485.215 9977.925)'
          fill='none'
          stroke='#e9e6e1'
          strokeWidth='2'
        />
      </g>
    </DiagonalArrowSvg>
  )
}
