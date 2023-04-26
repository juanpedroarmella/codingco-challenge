import { useState, useEffect } from 'react'

export default function useParallax (): number {
  const [offsetY, setOffSetY] = useState(0)

  useEffect(() => {
    const handleScroll = (): void => {
      const currentY = window.pageYOffset
      setOffSetY(currentY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [offsetY])

  return offsetY
}
