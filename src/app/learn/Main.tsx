import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React from 'react';
import AccordionItem from './AccordionItem';
import Modal from './Modal';
import Link from 'next/link';


const GET_LEARN = `
query LearnItems {
    learnItems {
      id
      title
      description
      url
      imageUrl
    }
  }
`


const Main = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    //HOOKS 
    const client = useGqlClient()

    //query
    const { data, error, loading } = useQuery(GET_LEARN, { client })



    console.log(data)


    return (
        <>
            <div className="-mx-4  grid grid-cols-1 lg:grid-cols-3 gap-4">


                {
                    data?.learnItems?.length && data.learnItems.map((item: any) =>
                        <div key={item?.id} className="group my-10 flex w-full  flex-col overflow-hidden  border rounded dark:bg-darkBgLight dark:border-darkBorder bg-white/30 cursor-pointer ">
                            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded group" >
                                <img className="peer absolute top-0 right-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-125" src={item?.imageUrl || '/assets/no_image.png'} alt="product image" />


                                <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>

                            </div>
                            <div className="mt-4 px-5 pb-5">

                                <h5 className="text-xl tracking-tight font-semibold capitalize">{item?.title}</h5>
                                <p className="mt-2 text-sm mb-5 text-dimText dark:text-gray-300">
                                    {item?.description || 'N/A'}
                                </p>
                                <div className='flex space-x-3'>
                                    <Link href={item?.url} >
                                        <button className="relative group inline-block flex-shrink-0  py-3 px-5  font-semibold text-orange-50 bg-primary overflow-hidden" type="submit">

                                            <div className="relative flex items-center justify-center">
                                                <span className="">Download</span>
                                            </div>
                                        </button>
                                    </Link>

                                    <button onClick={() => setIsModalOpen(true)} className="relative group inline-block flex-shrink-0   py-3 px-5  font-semibold text-primary  overflow-hidden" type="submit">

                                        <div className="relative flex items-center justify-center">
                                            <span className="">Interested</span>
                                        </div>
                                    </button>

                                </div>

                            </div>
                        </div>
                    )
                }


                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

            </div>
        </>
    );
};

export default Main;