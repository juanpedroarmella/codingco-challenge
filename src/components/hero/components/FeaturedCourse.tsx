import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Link from '@mui/material/Link'
import { useMemo } from 'react'
import { useThemeContext } from '@/styles/ThemeProvider'

interface Props {
  title: string
  paragraphs: string[]
}

const Container = styled(Box)(({ theme }) => {
  const { name: themename } = useThemeContext()
  const bgOnHover = useMemo(() => {
    if (
      themename === 'dark' ||
      themename === 'orange' ||
      themename === 'yellow'
    ) {
      return '#E9E6E1'
    }
    if (themename === 'light') {
      return '#E1DF3C'
    }
  }, [themename])
  return {
    padding: '7px 20px',
    marginLeft: '4px',
    height: '125px',
    textAlign: 'left',
    fontFamily: 'Work Sans',
    color: theme.palette.text.primary,
    position: 'relative',
    '&:before': {
      position: 'absolute',
      content: '""',
      right: 0,
      top: 0,
      bottom: 0,
      width: 0,
      transition: '0.3s',
      zIndex: -1
    },
    '&:hover:before': {
      width: '100%',
      backgroundColor: bgOnHover,
      color: 'red'
    },
    '&:hover': {
      transition: '0.3s',
      color: '#000000'
    }
  }
})

export default function FeaturedCourse ({
  title,
  paragraphs
}: Props): JSX.Element {
  return (
    <Container component='li'>
      <Link href='#' underline='none' color='inherit'>
        <Typography
          variant='h6'
          fontWeight='bold'
          fontSize='20px'
          lineHeight='25px'
        >
          {title}
        </Typography>
        {paragraphs.map((text: string, index: number) => (
          <Typography variant='body1' fontSize='16px' key={`${text}-${index}`}>
            {text}
          </Typography>
        ))}
      </Link>
    </Container>
  )
}
