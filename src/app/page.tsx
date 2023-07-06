import AboutUs from '@/components/Home/AboutUs'
import Companies from '@/components/Home/Companies'
import Hero from '@/components/Home/Hero'
import ImportantLinks from '@/components/Home/ImportantLinks'
import Services from '@/components/Home/Services'
import Image from 'next/image'
import Footer from './Footer'
import Navbar from './Navbar'
import Categories from '@/components/Home/Categories'

export default function Home() {
  return (
    <>

      <Hero />
      <Categories />
      <Services />
      <AboutUs />
      {/* <ImportantLinks /> */}
      <Companies />
      <Footer />

    </>
  )
}
