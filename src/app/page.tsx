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


// fetch data from api
const homePageData = async () => {

  const res = fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query HomePages {
        homePages {
          heroText
          heroImage
          hasHomeservices {
            title
            description
            id
          }
          hasProduct {
            title
            shortDescription
            id
          }
          hasHomeclient {
            id
            name
            logo
          }
        }
      }`,
      next: { revalidate: 30 }
    })
  })
  const { data } = await res.then(res => res.json())
  return data.homePages[0]
}







// component

export default async function Home() {


  const homeData = await homePageData()




  return (
    <>
      <Hero text={homeData?.heroText} bg={homeData?.heroImage} />
      <Services services={homeData?.hasHomeservices} />
      <Products products={homeData?.hasProduct} />
      <AboutUs />
      {/* <CTA /> */}
      <Companies clients={homeData?.hasHomeclient} />
      <Leads />


    </>
  )
}
