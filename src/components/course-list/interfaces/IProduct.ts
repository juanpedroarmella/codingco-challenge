export default interface IProduct {
  type: 'course' | 'workshop'
  title: string
  places?: 'few' | 'available' | 'none'
  img: string
  alt: string
}
