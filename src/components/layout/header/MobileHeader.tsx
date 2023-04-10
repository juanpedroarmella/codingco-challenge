import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import ButtonIconBar from './components/ButtonIconBar'
import Logo from './components/icons/Logo'
import WhatsappContact from './components/WhatsappContact'

const MobileHeaderContainer = styled(Box)(({ theme }: { theme?: Theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    alignItems: 'center',
    background: '#E9E6E1',
    height: '56px'
  }
})

const MobileHeader: React.FC = (): JSX.Element => {
  return (
    <MobileHeaderContainer>
      <Logo />
      <WhatsappContact />
      <ButtonIconBar />
    </MobileHeaderContainer>
  )
}

export default MobileHeader
