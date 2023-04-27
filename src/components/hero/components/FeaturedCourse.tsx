import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled, Theme, useTheme } from '@mui/material/styles'
import Link from '@mui/material/Link'
import { useThemeContext } from '@/styles/ThemeProvider'
import useMediaQuery from '@mui/material/useMediaQuery'
import ArrowRight from './img/ArrowRight'

const colors = {
  dark: '#E9E6E1',
  light: '#E1DF3C',
  yellow: '#E9E6E1',
  orange: '#E9E6E1'
}

interface ContainerProps {
  theme?: Theme
}

const Container = styled(Box)<ContainerProps>(({ theme }) => {
  const { name: themename } = useThemeContext()
  const bgOnHover = colors[themename]
  return {
    padding: '7px 20px',
    marginLeft: '4px',
    height: '125px',
    textAlign: 'left',
    fontFamily: 'Work Sans',
    color: themename === 'light' ? '#707070' : theme.palette.text.primary,
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
      backgroundColor: bgOnHover
    },
    '&:hover': {
      transition: '0.3s',
      color: '#000000',
      '& svg path': {
        fill: '#000000',
        transition: '0.3s'
      }
    },
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      padding: '1rem 2rem 0 2rem',
      margin: 0
    }
  }
})
interface Props {
  title: string
  paragraphs: string[]
}

export default function FeaturedCourse ({
  title,
  paragraphs
}: Props): JSX.Element {
  const theme = useTheme()
  const betweenMobileAndTablet = useMediaQuery(
    theme.breakpoints.between('sm', 'lg')
  )
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Container component='li'>
      <Link
        href='#'
        underline='none'
        color='inherit'
        display={betweenMobileAndTablet ? 'flex' : 'inline'}
        alignItems='center'
        height='100%'
      >
        <Box
          display='flex'
          alignItems={betweenMobileAndTablet ? 'flex-start' : 'center'}
          justifyContent='space-between'
          gap={1}
          flexDirection={betweenMobileAndTablet ? 'column' : 'row'}
        >
          <Typography
            variant='h6'
            fontWeight='bold'
            fontSize='20px'
            lineHeight='25px'
            width={betweenMobileAndTablet ? '100%' : '80%'}
          >
            {title}
          </Typography>
          <ArrowRight />
        </Box>

        {betweenMobileAndTablet
          ? null
          : paragraphs.map((text: string, index: number) => (
            <Typography
              variant='body1'
              fontSize='16px'
              key={`${text}-${index}`}
              display={isSm ? 'inline' : 'block'}
            >
              {text}
            </Typography>
          ))}
      </Link>
    </Container>
  )
}
