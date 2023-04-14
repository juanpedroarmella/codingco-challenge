// Importar componentes y hooks necesarios
import MobileDrawer from '@/components/atoms/MobileDrawer'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useCallback, useEffect, useState } from 'react'
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
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const { scrollY, innerHeight, document } = window
      const scrollBottom = scrollY + innerHeight
      const isAtTop = scrollY <= 0
      const isAtBottom = scrollBottom >= document.documentElement.scrollHeight

      if (!isAtTop && !isAtBottom) {
        setOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [open])

  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <header>
      <nav>
        <BarContainer>
          <Logo />
          <WhatsappContact />
          <ButtonIconBar handleClick={handleClick} clicked={open} />
        </BarContainer>
        <MobileDrawer open={open}>
          <MobileNav />
        </MobileDrawer>
      </nav>
    </header>
  )
}

export default MobileHeader
