import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import SeeAllNotices from './components/SeeAllNotices'
import NoticesList from './components/NoticesList'
import BlackAsterisk from './components/img/BlackAsterisk'
import MagentaCloud from './components/img/MagentaCloud'
import MagentaCircle from './components/img/MagentaCircle'
import GrayCloud from './components/img/GrayCloud'
import YellowCircle from './components/img/YellowCircle'

const BgContainer = styled(Box)(({ theme }) => {
  return {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    gap: 50,
    flexDirection: 'column',
    zIndex: 13,
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'space-between',
    overflow: 'hidden'
  }
})

const Container = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 90,
    paddingBottom: 40,
    margin: 'auto',
    position: 'relative',
    [theme.breakpoints.down(576)]: {
      padding: 'inherit 2.5%'
    },
    [theme.breakpoints.up(576)]: {
      maxWidth: theme.breakpoints.values.xs
    },
    [theme.breakpoints.up(768)]: {
      maxWidth: theme.breakpoints.values.sm
    },
    [theme.breakpoints.up(992)]: {
      maxWidth: theme.breakpoints.values.md
    },
    [theme.breakpoints.up(1200)]: {
      maxWidth: 1140
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: theme.breakpoints.values.lg
    }
  }
})

const MainTitle = styled('h3')(({ theme }) => {
  return {
    color: '#000000',
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 49,
    marginBottom: 100
  }
})

export default function Notices (): JSX.Element {
  return (
    <BgContainer>
      <Container>
        <MainTitle>Noticias Frescas</MainTitle>
        <NoticesList />
      </Container>
      <MagentaCloud />

      <MagentaCircle />
      <GrayCloud />
      <BlackAsterisk />
      <YellowCircle />
      <SeeAllNotices />
    </BgContainer>
  )
}
