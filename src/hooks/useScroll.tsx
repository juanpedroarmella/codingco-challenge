import { useState, useEffect } from 'react'

export const useScroll = (initialState = false): boolean => {
  const [scrolled, setScrolled] = useState(initialState)

  useEffect(() => {
    const handleScroll = (): void => {
      const offset = window.pageYOffset

      if (offset > 200) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrolled
}
