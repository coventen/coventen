import React from 'react';
import MessageContent from './MessageContent';
import Cookies from 'js-cookie';
import FilePreview from '@/app/vendor/dashboard/projects/(components)/FilePreview';
import Link from 'next/link';
import { BsCloudDownload } from 'react-icons/bs';

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



    return (
        <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">


            <main className="mt-8">
                <h2 className="text-gray-900 font-semibold dark:text-gray-200 pb-4 border-b">Sub: {details?.sub}</h2>

                <div className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                    <MessageContent content={JSON.parse(details?.message)} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
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
                    details?.hasReply?.map((reply: any, i: number) =>
                        <div key={i}>
                            <div className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                                <div className="col-span-full">
                                    <p className="text-base font-semibold text-primaryText ">{reply?.senderEmail}</p>
                                    <div className='text-dimText'>
                                        {reply?.replyMessage}
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }

            </main>


        </section>
    );
};

export default page; 