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
import MegaMenu from '@/components/Mega'
import Products from '@/components/Home/Products'
import CTA from '@/components/Home/CTA'
import Leads from '@/components/Leads'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <AboutUs />
      {/* <CTA /> */}
      <Companies />
      <Leads />


    </>
  )
}
