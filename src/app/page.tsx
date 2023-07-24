import AboutUs from '@/components/Home/AboutUs'
import Companies from '@/components/Home/Companies'
import Hero from '@/components/Home/Hero'
import ImportantLinks from '@/components/Home/ImportantLinks'
import Services from '@/components/Home/Services'
import Image from 'next/image'
import Footer from './Footer'
import Navbar from './Navbar'
import Categories from '@/components/Home/Categories'
import Services2 from '@/components/Home/Services2'

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Hero />

      <Categories />
      <Services />
      <Services2 />
      <AboutUs />
      {/* <ImportantLinks /> */}
      <Companies />
      <Footer />

    </>
  )
}
