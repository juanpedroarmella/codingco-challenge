import GlobalStyles from '@mui/material/GlobalStyles'

const GlobalCustomStyle = (): JSX.Element => (
  <GlobalStyles
    styles={{
      body: {
        margin: 0,
        padding: 0,
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          width: '0.5em',
          height: '0.5em'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#E1DF3C'
        },
        '&::-webkit-scrollbar-track ': {
          background: '#f0ef9e'
        }
      },
      img: {
        maxWidth: '100%'
      },
      '*': {
        boxSizing: 'border-box',
        fontFamily: 'Work Sans, sans-serif ',
        fontWeight: 400
      },
      a: {
        textDecoration: 'none ',
        color: 'inherit'
      }
    }}
  />
)

export default GlobalCustomStyle
