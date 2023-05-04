import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'
import { useState } from 'react'
import PlacesInfo from './PlacesInfo'

const MainContainer = styled('a')(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: 144,
    position: 'relative',
    '& img': {
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    },
    [theme.breakpoints.down('sm')]: {
      gap: '20px',
      height: 247
    },
    [theme.breakpoints.down('xs')]: {
      width: 120
    }
  }
})

const Title = styled('h3')(({ theme }) => {
  return {
    fontFamily: 'Work Sans',
    fontSize: 14,
    color: '#000000',
    marginTop: 0,
    lineHeight: '20px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    paddingLeft: '2px',
    '&:hover': {
      color: '#FD1E57'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      textAlign: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 15,
      textAlign: 'center'
    }
  }
})

interface ProductProps {
  title: string
  img: string
  places?: 'none' | 'few' | 'available'
  alt: string
  type: 'workshop' | 'course'
}

export default function Product ({
  title,
  img,
  places,
  alt,
  type
}: ProductProps): JSX.Element {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('xs'))
  const [opacity, setOpacity] = useState<0 | 1>(0)
  const handleHover = (): void => {
    setOpacity(1)
  }
  const handleLeave = (): void => {
    setOpacity(0)
  }
  return (
    <MainContainer
      href='#'
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      {isSm
        ? (
          <Image src={img} width={120} height={120} alt={alt} />
          )
        : (
          <Image src={img} width={144} height={144} alt={alt} />
          )}
      <Title>{title}</Title>
      {type === 'course'
        ? (
          <PlacesInfo places={places ?? 'available'} opacity={opacity} />
          )
        : null}
    </MainContainer>
  )
}
