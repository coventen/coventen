'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import HandleFileUpload from '@/shared/HandleFileUpload';
import deleteImage from '@/shared/deleteImage';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { v4 as uuid } from 'uuid'



const UPDATE_HOMEPAGE = `
mutation UpdateHomePages($where: HomePageWhere, $update: HomePageUpdateInput) {
    updateHomePages(where: $where, update: $update) {
      homePages {
        id
      }
    }
  }
`

const GET_HOMEPAGE = `
query HomePages {
  homePages {
    heroText
    heroImage
    id
  }
}

`


const Main = () => {

  const [image, setImage] = useState<any>(null);
  const [title, setTitle] = useState('');

  //hooks 
  const client = useGqlClient()
  const { uploadFile } = HandleFileUpload()


  //query
  const { data, loading: loadingQuery, error: errorQuery } = useQuery(GET_HOMEPAGE, { client })
  //mutation
  const [updateHomePageFn, { loading, error }] = useMutation(UPDATE_HOMEPAGE, { client })


  // initializing mutation  and query

  useEffect(() => {
    if (data?.homePages[0]) {
      setTitle(data?.homePages[0]?.heroText)
    }
  }, [data?.homePages[0]])



  var fileName = data?.homePages[0]?.heroImage.match(/\/([^\/?#]+)[^\/]*$/)[1];
  console.log(fileName, 'helro')
  const updateHomePage = async () => {

    if (image) {

      const imageLink = await uploadFile(image, `heroImage-${uuid()}`, 'homeImages')

      if (imageLink) {

        if (data?.homePages[0]?.heroImage) {
          const deletePreviousImage = await deleteImage(data?.homePages[0]?.heroImage)
        }

        const { data: updateData } = await updateHomePageFn({
          variables: {
            where: {
              id: data?.homePages[0]?.id
            },
            update: {
              heroText: title,
              heroImage: imageLink
            }
          }
        })

        console.log(updateData)
        if (updateData?.updateHomePages?.homePages[0]?.id) {
          toast.success('Updated Successfully')
        }
      }

    }



  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    updateHomePage()
  }

  return (
    <form onSubmit={handleSubmit} className='bg-white rounded p-5 min-h-[70vh]'>

      <div className="mb-5 ">
        <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
          Title
        </label>
        <textarea
          rows={4}
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
        />
      </div>

      <div className="mb-5">
        <div>
          <label htmlFor="image" className="block  text-gray-700 text-sm mb-1">Image</label>

          <input
            onChange={(e) => setImage(e?.target?.files?.[0])}
            type="file"
            name="image"
            className="mt-1 px-4 py-2 border border-gray-200 rounded-md w-full"
            accept="image/*"
          />
        </div>
      </div>



      <div>
        <button type='submit' className='px-4 py-2 bg-primary text-white font-semibold'>{loading ? 'loading..' : 'Update'}</button>
      </div>
    </form>
  );
};

export default Main;