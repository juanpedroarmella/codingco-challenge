import Box from '@mui/material/Box'
import { styled, Theme } from '@mui/material/styles'
import Logo from './Logo'
import Nav from './Nav'

const MobileHeaderContainer = styled(Box)(({ theme }: { theme?: Theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRigth: '2rem',
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
    </MobileHeaderContainer>
  )
}

export default MobileHeader
