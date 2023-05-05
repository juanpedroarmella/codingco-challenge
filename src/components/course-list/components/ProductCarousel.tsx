import { useMemo, useState } from 'react'
import Product from './Product'
import data from '../data/products'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CarouselNext from './CarouselNext'
import CarouselBack from './CarouselBack'

const CarouselContainer = styled(Box)<Props>(({ productsperslide }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${productsperslide},1fr)`,
  justifyItems: 'center',
  alignItems: 'center',
  gap: '10px'
}))

const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

const ArrowsContainer = styled(Box)(({ theme }) => ({
  marginTop: 5,
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 30,
  width: '8%',
  [theme.breakpoints.down(725)]: {
    position: 'absolute',
    top: 0,
    right: 20
  },
  [theme.breakpoints.down('xs')]: {
    position: 'absolute',
    top: 0,
    right: 0
  }
}))

const SliderContainer = styled(Box)(({ theme }) => {
  return {
    width: '90%',
    [theme.breakpoints.down(725)]: {
      width: '100%'
    }
  }
})

interface Props {
  productsperslide: number
}

function ProductCarousel ({ productsperslide }: Props): JSX.Element {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null)

  const slides = useMemo(() => {
    const arr: JSX.Element[] = []
    for (let i = 0; i < data.length; i += productsperslide) {
      const products = []
      for (let j = i; j < i + productsperslide; j++) {
        const product = data[j]
        if (product !== undefined) {
          products.push(<Product key={j} {...product} />)
        }
      }
      if (products.length > 0) {
        arr.push(
          <Box key={i}>
            <CarouselContainer productsperslide={productsperslide}>
              {products}
            </CarouselContainer>
          </Box>
        )
      }
    }
    return arr
  }, [productsperslide])

  return (
    <Container>
      <SliderContainer>
        <Slider
          ref={(c) => setSliderRef(c)}
          arrows
          vertical
          infinite
          nextArrow={<></>}
          prevArrow={<></>}
          rows={productsperslide - 1}
          slidesToScroll={1}
        >
          {slides}
        </Slider>
      </SliderContainer>
      <ArrowsContainer>
        <CarouselBack onClick={() => sliderRef?.slickPrev()} />
        <CarouselNext onClick={() => sliderRef?.slickNext()} />
      </ArrowsContainer>
    </Container>
  )
}

export default ProductCarousel
