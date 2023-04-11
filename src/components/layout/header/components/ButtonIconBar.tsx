import { styled } from '@mui/material/styles'
import { useCallback, useState } from 'react'
import MobileDrawer from '../../../atoms/MobileDrawer'
import MobileNav from './MobileNav'

const TransparentButton = styled('button')(() => {
  return {
    border: 'none',
    background: 'transparent',
    width: '45px',
    height: '40px',
    display: 'grid',
    alignItems: 'center',
    padding: '0.6rem 0.75rem'
  }
})

const Rect = styled('span')(({ clicked }: { clicked: boolean }) => {
  return {
    width: '100%',
    height: '2px',
    backgroundColor: 'black',
    transition: 'all 0.3s ease',
    '&:nth-of-type(1)': {
      transform: clicked ? 'rotate(-45deg)' : 'none',
      position: 'relative',
      top: clicked ? '100%' : 0
    },
    '&:nth-of-type(2)': {
      transform: clicked ? 'rotate(45deg)' : 'none',
      position: 'relative',
      bottom: clicked ? '0%' : 0
    },
    '&:nth-of-type(3)': {
      opacity: clicked ? 0 : 1
    }
  }
})

const IconBar: React.FC = (): JSX.Element => {
  const [clicked, setClicked] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    setClicked(!clicked)
  }, [clicked])

  return (
    <>
      <TransparentButton onClick={handleClick} aria-label='open-navigation'>
        <Rect clicked={clicked} />
        <Rect clicked={clicked} />
        <Rect clicked={clicked} />
      </TransparentButton>
      <MobileDrawer open={clicked}>
        <MobileNav />
      </MobileDrawer>
    </>
  )
}

export default IconBar
