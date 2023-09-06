import Leads from '@/components/Leads';
import Footer from './Footer';
import Navbar from './Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

// meta data api
export const metadata = {
  title: 'Coventen',
  description: 'We believe in best manufacturing practices will bring out best products',
}


// getting nav services
const navServices = async () => {

  const res = fetch('https://coventenapp.el.r.appspot.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query ServicePages {
              servicePages {
                id
                title
                hasSubservice {
                  id
                  title
                  slug
                }
              }
            }`,
      next: { revalidate: 3600 * 24 }
    })
  })
  const { data } = await res.then(res => res.json())
  return data?.servicePages
}
// getting nav Industries
const navIndustries = async () => {

  const res = fetch('https://coventenapp.el.r.appspot.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query IndustryPages {
        industryPages {
          id
          title
        }
      }`,
      next: { revalidate: 36 }
    })
  })
  const { data } = await res.then(res => res.json())
  return data?.industryPages
}










// component

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const servicesPromise = navServices()
  const industriesPromise = navIndustries()

  const [services, industries] = await Promise.all([servicesPromise, industriesPromise])





  // render

  return (
    <html lang="en">

      <body >

        <main className='bg-white text-gray-800 dark:bg-darkBg dark:text-white'>
          <Navbar services={services} industries={industries} />
          {children}
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
        />

      </body>
    </html>
  )
}
