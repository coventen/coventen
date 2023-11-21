import Link from 'next/link';
import React from 'react';

const DocumentTab = ({ userInfo, setCurrentTab }: any) => {
    return (
        <div className="space-y-4 text-gray-800 mt-2">
            <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold text-center sm:text-2xl">Documents</h2>
            </div>
            <div className='mt-3 grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-6'>
                {
                    userInfo?.documents ?
                        userInfo?.documents?.map((item: any, index: number) =>
                            <Link href={item || '#'}
                                key={index}
                                style={{
                                    backgroundImage: `url(${'/assets/file.svg'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',

                                }}
                                className=' h-28 w-24 text-sm flex items-center justify-center text-gray-800 font-semibold'>
                                document-{index + 1}
                            </Link>

                        )
                        :

                        <p className='mt-3 text-xs col-span-full'>No Document Found</p>
                }


            </div>
            <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold text-center sm:text-2xl">Attachment</h2>
            </div>
            <div className='mt-3 grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-6'>
                {
                    userInfo?.equipmentAttachments ?
                        userInfo?.equipmentAttachments?.map((item: any, index: number) =>
                            <Link href={item || '#'}
                                key={index}
                                style={{
                                    backgroundImage: `url(${'/assets/file.svg'})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',

                                }}
                                className=' h-28 w-24 text-sm flex items-center justify-center text-gray-800 font-semibold'>
                                document-{index + 1}
                            </Link>

                        )
                        :

                        <p className='mt-3 text-xs col-span-full'>No Document Found</p>
                }


            </div>

        </div>


    );
};

export default DocumentTab;