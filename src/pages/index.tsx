import GoToTop from '@/components/atoms/GoToTop'
import BottomNavBar from '@/components/atoms/BottomNavBar'
import Contact from '@/components/contact/Contact'
import CourseList from '@/components/course-list/CourseList'
import Hero from '@/components/hero/Hero'
import Notices from '@/components/notices/Notices'

export default function Home (): JSX.Element {
  return (
    <>
      <Hero />
      <CourseList />
      <Notices />
      <Contact />
      <BottomNavBar />

      <GoToTop />
    </>
  )
}
