import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const Arrow = styled('svg')(() => {
  return {
    '& path': {
      stroke: 'black',
      fill: 'black'
    }
  }
})

interface Props {
  onClick: () => void
}

export default function CarouselBack({ onClick }: Props): JSX.Element {
  return (
    <IconButton onClick={onClick}>
      <Arrow
        xmlns='http://www.w3.org/2000/svg'
        width='33.114'
        height='40.366'
        viewBox='0 0 33.114 40.366'>
        <path
          d='M10497.749-9940.029v-26.088l-8.239,8.642-4.294-4.094,15.589-16.356,14.7,16.238-4.4,3.984-7.424-8.2v25.87Z'
          transform='translate(-10485.215 9977.925)'
          stroke-width='2'
        />
      </Arrow>
    </IconButton>
  )
}
