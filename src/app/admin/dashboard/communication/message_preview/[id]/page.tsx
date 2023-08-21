import React from 'react';
import MessageContent from './MessageContent';

const getMessageDetails = async (id: string) => {

    const res = fetch('http://localhost:4000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

    console.log(details?.hasReply)


    return (
        <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">


            <main className="mt-8">
                <h2 className="text-gray-700 text-xl font-bold dark:text-gray-200">Sub: {details?.sub}</h2>

                <div className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                    <MessageContent content={details?.message} />
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
                                    {/* <textarea value={reply?.replyMessage} id="Reply" rows={5} placeholder="" className="w-full rounded-sm border border-gray-300 ring-primary dark:border-gray-700 dark:text-gray-900"></textarea> */}
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