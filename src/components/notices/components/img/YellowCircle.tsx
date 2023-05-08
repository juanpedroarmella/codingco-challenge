import { styled } from '@mui/material/styles'

const SvgCircle = styled('svg')(({ theme }) => {
  return {
    position: 'absolute',
    top: '45%',
    left: '45%',
    zIndex: -1,
    [theme.breakpoints.down('sm')]: {
      top: '50%',
      left: '25%'
    }
  }
})

export default function YellowCircle (): JSX.Element {
  return (
    <SvgCircle
      xmlns='http://www.w3.org/2000/svg'
      width='208'
      height='208'
      viewBox='0 0 208 208'
    >
      <circle
        id='svg_circulo_amarillo'
        data-name='svg_circulo amarillo'
        cx='104'
        cy='104'
        r='104'
        fill='#e1df3c'
      />
    </SvgCircle>
  )
}
