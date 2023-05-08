import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { useState } from 'react'
import PlacesInfo from './PlacesInfo'

const MainContainer = styled('a')(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '78%',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    '& img': {
      boxShadow: '3px 3px 5px 0px rgba(0,0,0,0.3) ',
      position: 'relative !important'
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
      <Box position='relative'>
        <Image src={img} alt={alt} fill />
        {type === 'course'
          ? (
            <PlacesInfo places={places ?? 'available'} opacity={opacity} />
            )
          : null}
      </Box>

      <Title>{title}</Title>
    </MainContainer>
  )
}
