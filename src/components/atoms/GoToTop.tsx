import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@mui/material'
import { useState, useEffect } from 'react'

interface ButtonProps {
  show: boolean
}

const GoToTopButton = styled('button')<ButtonProps>(({ show }) => {
  return {
    position: 'fixed',
    bottom: '30px',
    left: '30px',
    width: '48px',
    height: '48px',
    backgroundColor: '#0D753B',
    border: '3px solid #1D1D1B',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 4,
    opacity: show ? 1 : 0,
    visibility: show ? 'visible' : 'hidden',
    transition: 'opacity 0.5s ease, visibility 0.5s ease',
    '&:hover': {
      backgroundColor: '#0D753B'
    }
  }
})

const ArrowUp = styled(FontAwesomeIcon)(() => {
  return {
    fontSize: '25px'
  }
})

export default function GoToTop (): JSX.Element {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.pageYOffset > window.innerHeight * 0.7) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <GoToTopButton show={showButton} onClick={handleClick}>
      <ArrowUp icon={faArrowUp} />
    </GoToTopButton>
  )
}
