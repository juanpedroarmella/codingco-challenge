import GoToTop from '@/components/atoms/GoToTop'
import Hero from '@/components/hero/Hero'
import Box from '@mui/material/Box'

export default function Home (): JSX.Element {
  return (
    <>
      <Hero />
      <GoToTop />
      <Box
        bgcolor='white'
        height='100vh'
        display='grid'
        justifyItems='center'
        alignItems='center'
      >
        TestContainer
      </Box>
    </>
  )
}
