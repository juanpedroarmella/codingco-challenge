import { styled } from '@mui/material/styles'
import BearSection from './components/BearSection'
import ContactForm from './components/ContactForm'

const BgContainer = styled('section')(({ theme }) => {
  return {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    gap: 50,
    flexDirection: 'column',
    zIndex: 13,
    backgroundColor: '#FFFFFF',
    '&:before': {
      position: 'absolute',
      content: '""',
      width: '25%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundColor: theme.palette.background.paper
    },
    justifyContent: 'space-between',
    overflow: 'hidden'
  }
})

const MainContainer = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'sapce-between',
    alignItems: 'flex-start',
    margin: 'auto',
    position: 'relative',
    gap: '20%',
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

export default function Contact (): JSX.Element {
  return (
    <BgContainer>
      <MainContainer>
        <BearSection />
        <ContactForm />
      </MainContainer>
    </BgContainer>
  )
}
