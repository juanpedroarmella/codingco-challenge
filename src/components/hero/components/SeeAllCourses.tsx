import { useThemeContext } from '@/styles/ThemeProvider'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useMemo } from 'react'

const StyledLink = styled(Link)(() => {
  return {
    position: 'relative',
    overflow: 'hidden',
    padding: '20px 0'
  }
})

const StyledBox = styled(Box)(() => {
  return {
    display: 'flex',
    gap: '25px',
    position: 'relative',
    whiteSpace: 'nowrap'
  }
})

const StyledTypography = styled(Typography)(({ delay }: { delay: number }) => {
  const { name: themename } = useThemeContext()
  const letterColor = useMemo(() => {
    if (
      themename === 'dark' ||
      themename === 'light' ||
      themename === 'yellow'
    ) {
      return '#707070'
    }
  }, [themename])
  return {
    '@keyframes slide-in': {
      '0%': {
        transform: 'translateX(0%)'
      },
      '100%': {
        transform: 'translateX(-330%)'
      }
    },
    color: letterColor,
    animation: 'slide-in 16s linear infinite',
    animationDelay: `${delay}s`,
    position: 'absolute',
    left: '100%',
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: '16px'
  }
})

export default function SeAllCourses (): JSX.Element {
  const text = '//Ver todos los cursos'
  return (
    <StyledLink href='#' underline='none' color='inherit'>
      <StyledBox>
        <StyledTypography delay={0}>{text}</StyledTypography>
        <StyledTypography delay={5.35}>{text}</StyledTypography>
        <StyledTypography delay={10.65}>{text}</StyledTypography>
      </StyledBox>
    </StyledLink>
  )
}
