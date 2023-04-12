import MobileDrawer from '@/components/atoms/MobileDrawer'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useCallback, useState } from 'react'
import ButtonIconBar from './components/ButtonIconBar'
import Logo from './components/icons/Logo'
import MobileNav from './components/MobileNav'
import WhatsappContact from './components/WhatsappContact'

const BarContainer = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    alignItems: 'center',
    background: '#E9E6E1',
    height: '56px',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100vw'
  }
})

const MobileHeader: React.FC = (): JSX.Element => {
  const [clicked, setClicked] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    setClicked(!clicked)
  }, [clicked])

  return (
    <header>
      <nav>
        <BarContainer>
          <Logo />
          <WhatsappContact />
          <ButtonIconBar handleClick={handleClick} clicked={clicked} />
        </BarContainer>
        <MobileDrawer open={clicked}>
          <MobileNav />
        </MobileDrawer>
      </nav>
    </header>
  )
}

export default MobileHeader
