import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Featured from './components/Featured'
import HeroLogo from './components/img/HeroLogo'
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
    minHeight: '100vh',
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

const LineSpan = styled(Box)(({ theme }) => {
  return {
    borderTop: `1px solid ${theme.palette.text.primary}`,
    height: '125px',
    [theme.breakpoints.down('sm')]: {
      height: '75px'
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
      top: '40%',
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
      top: '40%',
      transform: 'translateY(-40%)'
    }
  }
})

const Slogan = styled(Box)(({ theme }) => {
  return {
    width: '75%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
})

export default function Hero (): JSX.Element {
  const theme = useTheme()
  return (
    <Bg component='section' data-testid='hero'>
      <Lines data-testid='lines'>
        <LineSpan />
        <LineSpan />
        <LineSpan borderBottom={`1px solid ${theme.palette.text.primary}`} />
      </Lines>
      <Main data-testid='content-limiter'>
        <Text data-testid='content'>
          <Slogan data-testid='slogan'>
            <HeroLogo data-testid='logo' />
            <SpanSubtitle data-testid='subtitle' />
          </Slogan>
          <Featured />
        </Text>
      </Main>
    </Bg>
  )
}
