import AboutUs from '@/components/Home/AboutUs'
import Companies from '@/components/Home/Companies'
import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services'
import Products from '@/components/Home/Products'
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

    }),

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
      query Services($where: ServiceWhere) {
        services(where: $where) {
          title
          slug
          description
        }
      }
      `,
      variables: {
        "where": {
          "isPopular": true
        }
      }

    }),

  })
  const { data } = await res.then(res => res.json())
  return data.services
}

const homeProducts = async () => {
  const res = fetch('https://coventenapp.el.r.appspot.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
      query Products($where: ProductWhere) {
        products(where: $where) {
          title
          shortDescription
          id
        }
      }
      `,
      variables: {
        "where": {
          "isPopular": true
        }
      }

    }),

  })
  const { data } = await res.then(res => res.json())
  return data.products
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
  const productPromise = await homeProducts()

  const [homeData, clientData, services, heroData, products] = await Promise.all([homeDataPromise, homeClientDataPromise, homeServicePromise, heroDataPromise, productPromise])




  return (
    <>
      <section className='relative z-10'>
        <Hero heroData={heroData} />
        <Services services={services} />
        <Products products={products} />
        <AboutUs />
        <Products products={products} />
        <Companies clients={clientData} />
      </section>
      <Leads />


    </>
  )
}
