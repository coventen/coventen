import React from 'react';
import MessageContent from './MessageContent';
import Cookies from 'js-cookie';
import FilePreview from '@/app/vendor/dashboard/projects/(components)/FilePreview';
import Link from 'next/link';
import { BsCloudDownload } from 'react-icons/bs';
import ChatBody from './ChatBody';

const getMessageDetails = async (id: string) => {
    const token = Cookies.get('conventenToken');

    const res = fetch('https://coventenapp.el.r.appspot.com/', {
        method: 'POST',
        headers: {
            "authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `query CommunicationTickets($where: CommunicationTicketWhere) {
                communicationTickets(where: $where) {
                  id
                  sub
                  date
                  files
                  message
                  hasReply {
                    replyMessage
                    senderEmail
                  }
                  forClient {
                    userIs {
                        id
                      userId
                      email
                    }
                  }
                  forVendor {
                    userIs {
                        id
                      userId
                      email
                    }
                  }
                }
              }
              `,
            variables: {
                where: {
                    id: id
                }
            },

        })
    })

    const { data } = await res.then(res => res.json())




    return data.communicationTickets[0]
}




const page = async ({ params, searchParams }: any) => {


    const { id } = params
    const details = await getMessageDetails(id)

    console.log(details?.forVendor[0]?.userIs?.userId, 'this is the vendor id 000000000000')

    return (
        <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">


            <main className="mt-8">
                <Link
                    target='_blank'
                    href={
                        details?.forVendor[0]?.userIs?.id || details?.forClient[0]?.userIs?.id ?
                            `/admin/dashboard/users/${details?.forVendor[0]?.userIs?.id || details?.forClient[0]?.userIs?.id}`
                            :
                            '#'


                    } className="text-gray-900  dark:text-gray-200 pb-2 hover:underline">
                    From: UserId- {details?.forClient[0]?.userIs?.userId || details?.forVendor[0]?.userIs?.userId} | {details?.forClient[0]?.userIs?.email || details?.forVendor[0]?.userIs?.email}</Link>
                <h2 className="text-gray-900  dark:text-gray-200 pb-4 border-b">Sub: {details?.sub}</h2>

                <div className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                    <MessageContent content={JSON.parse(details?.message)} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 mt-8'>
                    {
                        details?.files?.map((fileLink: any, i: number) =>
                            <Link href={fileLink} target='_blank' key={i}>
                                <div
                                    style={{
                                        backgroundImage: `url(${'/assets/file.svg'})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',

                                    }}
                                    className=' h-24 w-full text-xl bg-gray-100 flex items-center justify-center text-gray-800 font-semibold'>
                                    <BsCloudDownload />
                                </div>
                            </Link>
                        )

                    }
                </div>


                {
                    <ChatBody currentModule={id} />
                }

            </main>


        </section>
    );
};

export default page; 