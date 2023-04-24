import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled, Theme, useTheme } from '@mui/material/styles'
import Link from '@mui/material/Link'
import { useMemo } from 'react'
import { useThemeContext } from '@/styles/ThemeProvider'
import useMediaQuery from '@mui/material/useMediaQuery'

interface ContainerProps {
  theme?: Theme
}

const Container = styled(Box)<ContainerProps>(({ theme }) => {
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

const Arrow = styled('svg')(({ theme }) => {
  return {
    '& path': {
      fill: theme.palette.text.primary
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
          <Arrow
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='19.467'
            viewBox='0 0 15 19.467'
          >
            <g transform='translate(61.143 -16.142) rotate(90)'>
              <g transform='translate(16.142 48)'>
                <g>
                  <path
                    d='M2038.692,1329.5l-2.76-2.631,10.019-10.512,9.448,10.437-2.827,2.561-6.693-7.393Z'
                    transform='translate(-2035.932 -1316.353)'
                    fill='#e9e6e1'
                  />
                </g>
              </g>
            </g>
          </Arrow>
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
