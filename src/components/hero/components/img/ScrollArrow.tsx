import { styled } from '@mui/material/styles'

const Arrow = styled('svg')(({ theme }) => ({
  '& path': {
    fill: theme.palette.text.primary
  }
}))

const ScrollButton = styled('button')(({ theme }) => {
  return {
    position: 'absolute',
    bottom: '-170px',
    left: '48%',
    '@keyframes animate-arrow': {
      '0%': {
        transform: 'translateY(0px)'
      },
      '50%': {
        transform: 'translateY(-20px)'
      },
      '100%': {
        transform: 'translateY(0px)'
      }
    },
    animation: 'animate-arrow 1s ease infinite',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      bottom: '-140px',
      left: '46%'
    }
  }
})

export default function ScrollArrow (): JSX.Element {
  const handleScroll = (): void => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <ScrollButton onClick={handleScroll}>
      <Arrow
        xmlns='http://www.w3.org/2000/svg'
        width='24.128'
        height='43.775'
        viewBox='0 0 24.128 43.775'
      >
        <g transform='translate(1339.614 1839.067)'>
          <path
            d='M-1315.806-1816.987l.32.128-11.968,21.567h-.192l-11.968-21.567.32-.128,11.072,14.847v-36.927h1.216v37.056Z'
            fill='#e5e1dc'
          />
        </g>
      </Arrow>
    </ScrollButton>
  )
}
