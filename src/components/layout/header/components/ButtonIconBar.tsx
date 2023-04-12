import { styled } from '@mui/material/styles'

const TransparentButton = styled('button')(() => {
  return {
    border: 'none',
    background: 'transparent',
    width: '45px',
    height: '40px',
    display: 'grid',
    alignItems: 'center',
    padding: '0.6rem 0.75rem'
  }
})

const Rect = styled('span')(({ clicked }: { clicked: boolean }) => {
  return {
    width: '100%',
    height: '2px',
    backgroundColor: 'black',
    transition: 'all 0.3s ease',
    '&:nth-of-type(1)': {
      transform: clicked ? 'rotate(-45deg)' : 'none',
      position: 'relative',
      top: clicked ? '100%' : 0
    },
    '&:nth-of-type(2)': {
      transform: clicked ? 'rotate(45deg)' : 'none',
      position: 'relative',
      bottom: clicked ? '0%' : 0
    },
    '&:nth-of-type(3)': {
      opacity: clicked ? 0 : 1
    }
  }
})

interface Props {
  handleClick: () => void
  clicked: boolean
}

const IconBar: React.FC<Props> = ({ handleClick, clicked }): JSX.Element => {
  return (
    <>
      <TransparentButton onClick={handleClick} aria-label='open-navigation'>
        <Rect clicked={clicked} />
        <Rect clicked={clicked} />
        <Rect clicked={clicked} />
      </TransparentButton>
    </>
  )
}

export default IconBar
