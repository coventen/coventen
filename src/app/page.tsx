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

  const res = fetch('https://coventenapp.el.r.appspot.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query HomePages {
        homePages {
          heroText
          heroImage
          hasProduct {
            title
            shortDescription
            id
          }
        }
      }`,
    })
  })
  const { data } = await res.then(res => res.json())
  return data.homePages[0]
}

const homeClient = async () => {
  const res = fetch('https://coventenapp.el.r.appspot.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query HomeClients {
        homeClients {
          id
          name
          logo
        }
      }`,

    })
  })
  const { data } = await res.then(res => res.json())
  return data.homeClients
}
const homeServices = async () => {
  const res = fetch('https://coventenapp.el.r.appspot.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
      query HomeServices {
        homeServices {
          title
          description
          slug
          id
        }
      }
      `,

    })
  })
  const { data } = await res.then(res => res.json())
  return data.homeServices
}

const heroDataFn = async () => {
  const res = fetch('https://coventenapp.el.r.appspot.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
      query Heroes($where: HeroWhere) {
        heroes(where: $where) {
          id
          title
          image
        }
    }
      `,

    }),
    next: { revalidate: 10 }

  })
  const { data } = await res.then(res => res.json())
  return data.heroes
}






// component

export default async function Home() {


  const homeDataPromise = homePageData()
  const homeClientDataPromise = await homeClient()
  const homeServicePromise = await homeServices()
  const heroDataPromise = await heroDataFn()

  const [homeData, clientData, services, heroData] = await Promise.all([homeDataPromise, homeClientDataPromise, homeServicePromise, heroDataPromise])



  console.log(heroData, ' this is hero data')
  return (
    <>
      <section className='relative z-10'>
        <Hero heroData={heroData} />
        <Services services={services} />
        <Products products={homeData?.hasProduct} />
        <AboutUs />
        {/* <CTA /> */}
        <Products products={homeData?.hasProduct} />
        <Companies clients={clientData} />
      </section>
      <Leads />


    </>
  )
}
