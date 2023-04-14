import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const MadeBy: React.FC = (): JSX.Element => {
  return (
    <Box fontFamily='Gotham' fontStyle='normal' color='#707070'>
      <Typography display='inline' fontWeight='light' fontSize='14px'>
        Made by
      </Typography>
      <Typography display='inline' fontWeight='bold' fontSize='16px'>
        Juan Pedro Armella
      </Typography>
    </Box>
  )
}

export default MadeBy
