import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const Arrow = styled('svg')(() => {
  return {
    '& path': {
      fill: 'black'
    },
    width: 22,
    height: 22
  }
})

const ArrowButton = styled(IconButton)(() => {
  return {
    opacity: 0.6,
    transition: 'all 0.3s',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 45,
      height: 45,
      padding: 0,
      border: '3px solid black',
      borderRadius: '50%',
      transition: 'all 0.3s'
    },
    '&:hover:before': {
      transform: 'rotate(45deg)',
      opacity: 1,
      borderRadius: 0
    },
    '&:hover': {
      opacity: 1
    }
  }
})

interface Props {
  onClick: () => void
}

export default function CarouselNext ({ onClick }: Props): JSX.Element {
  return (
    <ArrowButton onClick={onClick}>
      <Arrow
        xmlns='http://www.w3.org/2000/svg'
        width='33.114'
        height='40.366'
        viewBox='0 0 33.114 40.366'
      >
        <path
          d='M10497.749-9940.029v-26.088l-8.239,8.642-4.294-4.094,15.589-16.356,14.7,16.238-4.4,3.984-7.424-8.2v25.87Z'
          transform='translate(-10485.215 9977.925)'
          strokeWidth={0}
        />
      </Arrow>
    </ArrowButton>
  )
}
