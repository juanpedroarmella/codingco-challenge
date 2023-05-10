import { styled } from '@mui/material/styles'

const Label = styled('label')(() => {
  return {
    color: '#707070',
    fontFamily: 'Work Sans',
    fontWeight: 'bold',
    fontSize: 13
  }
})

interface Props {
  htmlFor: string
  children: React.ReactNode
}

export default function InputLabel ({ htmlFor, children }: Props): JSX.Element {
  return (
    <>
      <Label htmlFor={htmlFor}>{children}</Label>
    </>
  )
}
