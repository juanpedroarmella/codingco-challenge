import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Product from './Product'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import data from '../data/products'
import { useMemo } from 'react'

const CarouselContainer = styled(Box)(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    justifyItems: 'center',
    alignItems: 'center',
    gap: '5px'
  }
})

export default function CarouselDesktop (): JSX.Element {
  const slides = useMemo(() => {
    const arr = []
    for (let i = 0; i < data.length; i += 3) {
      arr.push(
        <Box key={i}>
          <CarouselContainer>
            <Product
              title={data[i].title}
              img={data[i].img}
              alt={data[i].alt}
              places={data[i].places}
              type={data[i].type}
            />
            {data[i + 1] !== undefined
              ? (
                <Product
                  title={data[i + 1].title}
                  img={data[i + 1].img}
                  alt={data[i + 1].alt}
                  places={data[i + 1].places}
                  type={data[i + 1].type}
                />
                )
              : null}

            {data[i + 2] !== undefined
              ? (
                <Product
                  title={data[i + 2].title}
                  img={data[i + 2].img}
                  alt={data[i + 2].alt}
                  places={data[i + 2].places}
                  type={data[i + 2].type}
                />
                )
              : null}
          </CarouselContainer>
        </Box>
      )
    }
    return arr
  }, [])

  return (
    <Slider arrows vertical infinite rows={2} slidesToScroll={1}>
      {slides}
    </Slider>
  )
}
