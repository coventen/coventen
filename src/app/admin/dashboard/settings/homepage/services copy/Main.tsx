'use client'
import Loading from '@/app/loading';
import { useGqlClient } from '@/hooks/UseGqlClient';
import HandleFileUpload from '@/shared/HandleFileUpload';
import deleteImage from '@/shared/deleteImage';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { v4 as uuid } from 'uuid'



const UPDATE_SERVICE = `
mutation UpdateHomeServices($where: HomeServicesWhere, $update: HomeServicesUpdateInput) {
  updateHomeServices(where: $where, update: $update) {
    homeServices {
      id
    }
  }
}
`

const GET_SERVICE = `
query Query {
  homeServices {
    id
    title
    description
  }
}

`


const Main = () => {

  //states

  const [serviceData, setServiceData] = useState<any>({
    service1: {
      id: '',
      title: '',
      description: ''
    },
    service2: {
      id: '',
      title: '',
      description: ''
    },
    service3: {
      id: '',
      title: '',
      description: ''
    },
    service4: {
      id: '',
      title: '',
      description: ''
    },
    service5: {
      id: '',
      title: '',
      description: ''
    },
    service6: {
      id: '',
      title: '',
      description: ''
    },

  })

  //hooks 
  const client = useGqlClient()
  const { uploadFile } = HandleFileUpload()


  //query
  const { data, loading: loadingQuery, error: errorQuery } = useQuery(GET_SERVICE, { client })
  //mutation
  const [updateHomePageFn, { loading, error }] = useMutation(UPDATE_SERVICE, { client })


  // initializing mutation  and query

  useEffect(() => {
    if (data?.homeServices.length) {
      data?.homeServices?.map((service: any, i: number) => {
        setServiceData((prev: any) => ({
          ...prev,
          [`service${i + 1}`]: {
            id: service.id,
            title: service.title,
            description: service.description
          }
        }))
      })
    }
  }, [data?.homeServices?.length])





  const updateHomePage = async (id: string, title: string, description: string) => {

    const { data: updateData } = await updateHomePageFn({
      variables: {
        "where": {
          "id": id
        },
        "update": {
          "title": title,
          "description": description
        }
      }
    })

  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    Object.keys(serviceData).map(async (key: any) => {
      const { id, title, description } = serviceData[key]
      if (id) {
        updateHomePage(id, title, description)
      }
    })
    e.target.reset()
  }





  if (loading || loadingQuery) return <Loading />






  // render 

  return (
    <form onSubmit={handleSubmit} className='bg-white rounded p-5 min-h-[70vh]'>



      {
        data?.homeServices?.length && data?.homeServices?.map((service: any, i: number) =>


          <div key={service?.id}  >

            <div className="mb-5 ">
              <p className='font-bold mb-4'>Service-{i + 1}</p>
              <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                Title
              </label>
              <input
                defaultValue={serviceData[`service${i + 1}`]?.title}
                onChange={(e) => setServiceData((prev: any) => {
                  return {
                    ...prev,
                    [`service${i + 1}`]: {
                      ...prev[`service${i + 1}`],
                      title: e.target.value
                    }
                  }
                })}
                className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
              />
            </div>
            <div className="mb-5 ">
              <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                Description
              </label>
              <textarea
                rows={5}
                defaultValue={serviceData[`service${i + 1}`]?.description}
                onChange={(e) => setServiceData((prev: any) => {
                  return {
                    ...prev,
                    [`service${i + 1}`]: {
                      ...prev[`service${i + 1}`],
                      description: e.target.value
                    }
                  }
                })}
                className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
              />
            </div>


          </div>

        )
      }








      <div>
        <button type='submit' className='px-4 py-2 bg-primary text-white font-semibold'>{loading ? 'loading..' : 'Update'}</button>
      </div>
    </form >
  );
};

export default Main;