import { useThemeContext } from '@/styles/ThemeProvider'
import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useMemo } from 'react'

interface HexProps {
  theme?: Theme
  themename: string
}

const Hex = styled('svg')<HexProps>(({ themename, theme }) => {
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

interface TextProps {
  theme?: Theme
  themename: string
}

const Text = styled(Typography)<TextProps>(({ theme, themename }) => {
  const letterColor = useMemo(() => {
    if (themename === 'dark') {
      return '#E6511B'
    }
    if (themename === 'light' || themename === 'yellow') {
      return '#000000'
    }
    if (themename === 'orange') {
      return '#FFFFFF'
    }
  }, [themename])
  return {
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: '20px',
    color: letterColor,
    width: '145px',
    textAlign: 'center',
    position: 'relative',
    lineHeight: '23px',
    top: '22px',
    left: '12px',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      width: '66px',
      top: '39px',
      left: '54px'
    }
  }
})

const Dots = styled('svg')(({ theme }) => {
  const { name: themename } = useThemeContext()
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

const Container = styled(Box)(({ theme }) => {
  return {
    maxHeight: '166px',
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden'
    }
  }
})

export default function LastPlaces (): JSX.Element {
  const { name: themename } = useThemeContext()
  return (
    <Container data-test-id='last-places' maxHeight='125px'>
      <Text themename={themename}>Últimos lugares</Text>
      <Hex
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
      </Hex>
      <Dots
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
      </Dots>
    </Container>
  )
}
