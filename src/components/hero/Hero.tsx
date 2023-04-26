import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Featured from './components/Featured'
import Asterisk from './components/img/Asterisk'
import HeroLogo from './components/img/HeroLogo'
import Line from './components/img/Line'
import ScrollArrow from './components/img/ScrollArrow'
import SmallAsterisk from './components/img/SmallAsterisk'
import SpanSubtitle from './components/SpanSubtitle'

const Bg = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default
  }
})

const Main = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    height: '100vh',
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
    [theme.breakpoints.down('sm')]: {
      top: '38%',
      transform: 'translateY(-40%)'
    },
    zIndex: 0
  }
})

const Text = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      height: '225px',
      position: 'absolute',
      top: '38%',
      transform: 'translateY(-40%)'
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
          </Slogan>
          <Featured />
        </Text>
      </Main>
    </Bg>
  )
}
