import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import HeroLogo from './components/img/HeroLogo'

const BgContainer = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    width: '100%'
  }
})

const MainContainer = styled(Box)(({ theme }) => {
  return {
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

const BorderedSpan = styled(Box)(({ theme }) => {
  return {
    borderTop: `1px solid ${theme.palette.text.primary}`,
    height: '125px',
    [theme.breakpoints.down('sm')]: {
      height: '75px'
    }
  }
})

const ItemsContainer = styled(Box)(({ theme }) => {
  return {
    position: 'absolute',
    top: '30.8%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      top: '22.4%'
    }
  }
})

export default function Hero (): JSX.Element {
  const theme = useTheme()
  return (
    <BgContainer>
      <MainContainer>
        <ItemsContainer>
          <BorderedSpan />
          <BorderedSpan />
          <BorderedSpan
            borderBottom={`1px solid ${theme.palette.text.primary}`}
          />
          <HeroLogo />
        </ItemsContainer>
      </MainContainer>
    </BgContainer>
  )
}
