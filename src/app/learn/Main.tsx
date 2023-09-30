import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import Modal from './Modal';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import Pagination from '@/components/Pagination';
import Loading from '../loading';


const GET_LEARN = `
query LearnItems($where: LearnItemWhere, $options: LearnItemOptions) {
    learnItems(where: $where, options: $options) {
      id
      title
      description
      url
      imageUrl
      mode
      rating
      seats
      price
      credit
      startDate
      endDate
    }
  }
`


const Main = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [currentEvent, setCurrentEvent] = React.useState<any>(null);
    const [data, setData] = React.useState<any>(null);
    // pagination states
    const [pageLimit, setPageLimit] = React.useState(6)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState(0)
    const [totalLearnItem, setTotalLearnItem] = React.useState(0)


    //HOOKS 
    const client = useGqlClient()

    //query

    const [getLearnItemFn, dataState] = useManualQuery(GET_LEARN, { client })

    // getting general notifications for all users
    const getLearnItems = async () => {
        const { data } = await getLearnItemFn({
            variables: {
                where: {},
                options: {
                    limit: pageLimit,
                    offset: (currentPage - 1) * pageLimit,
                    sort: [
                        {
                            createdAt: "DESC"
                        }
                    ]
                }
            }
        })

        if (data?.learnItems?.length > 0) {
            setData(data)
        }
    }

    const getItemsCount = async () => {
        const { data } = await getLearnItemFn()

        if (data?.learnItems?.length > 0) {
            setData(data)
            setTotalLearnItem(data?.learnItems?.length)
            setTotalPages(Math.ceil(data?.learnItems?.length / pageLimit))
        }
    }


    useEffect(() => {
        getItemsCount()
        getLearnItems()

    }, [currentPage])



    useEffect(() => {
        console.log(data?.learnItems?.length, 'data?.learnItems?.length')

    }, [data?.learnItems?.length])

    console.log(totalLearnItem, 'totalLearnItem', pageLimit, 'pageLimit', currentPage, 'currentPage', totalPages, 'totalPages')

    if (dataState.loading) <Loading />


    return (
        <>
            <div className="-mx-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


                {
                    data?.learnItems?.length && data.learnItems.map((item: any) =>
                        <div key={item?.id} className=" relative my-10 flex w-full  flex-col overflow-hidden  border rounded dark:bg-darkBgLight dark:border-darkBorder bg-white/30  ">
                            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded group" >
                                <img className="peer absolute top-0 right-0 h-full w-full object-contain transition-all duration-500 group-hover:scale-125" src={item?.imageUrl || '/assets/no_image.png'} alt="product image" />


                                <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>

                            </div>
                            <div className="mt-4 px-5 pb-3">
                                <h5 className="text-base tracking-tight font-semibold uppercase mb-2">{item?.title}</h5>
                                <p className="mt-2 text-[13px] mb-5 text-justify text-dimText dark:text-gray-300">
                                    {item?.description || 'N/A'}
                                </p>
                            </div>
                            <div className=" px-5 pb-5 ">


                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold text-sm mb-3 '>Rating:</p>
                                    <p className='font-semibold text-dimText text-sm mb-3 flex items-center justify-center space-x-2'>{item?.rating || 4.5}
                                        <span className='text-primary'><AiFillStar /></span>
                                    </p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold text-sm mb-3'>Seats:</p>
                                    <p className='font-semibold text-dimText text-sm mb-3'>{item?.seats}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold text-sm mb-3'>Credit:</p>
                                    <p className='font-semibold text-dimText text-sm mb-3'>{item?.credit}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold text-sm mb-3'>Mode:</p>
                                    <p className='font-semibold text-dimText text-sm mb-3'>{item?.mode}</p>
                                </div>
                                <div className='flex items-center justify-between mb-14'>
                                    <p className='font-semibold text-sm mb-3'>Date of apply:</p>
                                    <p className='font-semibold text-dimText text-sm mb-3'>{item?.startDate.slice(0, 10)} - {item?.endDate.slice(0, 10)}
                                    </p>
                                </div>

                                {/* <p className='font-semibold text-sm mb-3'>Mode: {item?.mode} | Seats: {item?.seats} | Credit: {item?.credit}</p>
                                <p className='font-semibold text-sm mb-3'>Date of apply: {item?.startDate.slice(0, 10)} -- {item?.endDate.slice(0, 10)} </p>
                                <p className='font-semibold text-sm mb-12 flex items-center space-x-2'>Price: <BsCurrencyRupee /> {item?.price}</p> */}


                                <div className=' absolute bottom-4 flex space-x-3'>
                                    {/* <Link href={item?.url} >
                                        <button className="relative group inline-block flex-shrink-0  py-3 px-5  font-semibold text-orange-50 bg-primary overflow-hidden" type="submit">

                                            <div className="relative flex items-center justify-center">
                                                <span className="">Learn More</span>
                                            </div>
                                        </button>
                                    </Link> */}
                                    <div>
                                        <Link href={item?.url} >
                                            <button className="relative group inline-block flex-shrink-0  py-3.5 px-5 text-sm font-semibold text-orange-50 bg-primary  overflow-hidden" type="submit">
                                                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                                <div className="relative flex items-center justify-center">
                                                    <span className="">Learn More</span>

                                                </div>
                                            </button>
                                        </Link>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setIsModalOpen(true)
                                            setCurrentEvent(item?.title)
                                        }}
                                        className="relative group inline-block flex-shrink-0   py-3 px-5 text-sm font-semibold text-primary hover:text-white bg-transparent border border-primary  overflow-hidden" type="submit">
                                        <div className="absolute top-0 right-full w-full h-full bg-primary transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                        <div className="relative flex items-center justify-center">
                                            <span className="">Interested</span>
                                        </div>
                                    </button>





                                    {/* <button onClick={() => {
                                        setIsModalOpen(true)
                                        setCurrentEvent(item?.title)
                                    }} className="relative group inline-block flex-shrink-0   py-3 px-5  font-semibold text-primary  overflow-hidden" type="submit">

                                        <div className="relative flex items-center justify-center">
                                            <span className="">Interested</span>
                                        </div>
                                    </button> */}

                                </div>

                            </div>
                        </div>
                    )
                }


                <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} learn={currentEvent} />

            </div>
            <div className='w-full mt-12 flex items-center justify-center'>
                {totalLearnItem > pageLimit &&
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />}

            </div>
        </>
    );
};

export default Main;