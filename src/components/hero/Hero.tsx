import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Featured from './components/Featured'
import AnimatedHex from './components/img/AnimatedHex'
import Asterisk from './components/img/Asterisk'
import Circle from './components/img/Circle'
import HeroLogo from './components/img/HeroLogo'
import Line from './components/img/Line'
import ScrollArrow from './components/img/ScrollArrow'
import SmallAsterisk from './components/img/SmallAsterisk'
import Trap from './components/img/Trap'
import SpanSubtitle from './components/SpanSubtitle'

const Bg = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    minHeight: '750px',
    position: 'relative'
  }
})

const Main = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: 'translateY(-50%)',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      top: '29.5%'
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: theme.breakpoints.values.xs
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.breakpoints.values.sm
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: theme.breakpoints.values.xl
    }
  }
})

const Lines = styled(Box)(({ theme }) => {
  return {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      top: '34%'
    }
  }
})

const Text = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      width: '100vw'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
      position: 'absolute',
      top: '75px',
      transform: 'translateY(-30%)'
    }
  }
})

const Slogan = styled(Box)(({ theme }) => {
  return {
    position: 'relative',
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
})

export default function Hero (): JSX.Element {
  return (
    <Bg component='section' data-testid='hero'>
      <Lines data-testid='lines'>
        <Line />
        <Line />
        <Line withbottom='true' />
      </Lines>
      <Main data-testid='content-limiter'>
        <Text data-testid='content'>
          <Slogan data-testid='slogan'>
            <HeroLogo data-testid='logo' />
            <SpanSubtitle data-testid='subtitle' />
            <ScrollArrow />
            <Asterisk />
            <SmallAsterisk />
            <AnimatedHex />
            <Trap />
            <Circle />
          </Slogan>
          <Featured />
        </Text>
      </Main>
    </Bg>
  )
}
