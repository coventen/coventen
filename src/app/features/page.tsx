import React from 'react';



const featuresDetails = async () => {
    const res = fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `query FeaturesPages($where: FeaturesPageWhere) {
                featuresPages(where: $where) {
                  title
                  id
                  image
                  description
                }
              }`
        }),
        next: { revalidate: 36 }

    })

    const { data } = await res.then(res => res.json())
    return data.featuresPages
}




const page = async () => {



    const data = await featuresDetails()

    console.log(data, ' this is data')

    return (
        <>

            {
                data?.length && data.map((item: any, idx: number) =>
                    <div key={item?.id} className="">
                        <section id={item?.id} className="py-14">
                            <div className="max-w-screen-xl mx-auto md:px-8">
                                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                                    <div className={`flex-1 sm:hidden lg:block ${(idx + 1) % 2 === 0 ? "order-1" : 'order-2'}`}>
                                        <img src={item?.image} alt="" />
                                    </div>
                                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">

                                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                            {item?.title}
                                        </p>
                                        <p className="mt-3 text-gray-600">
                                            {item?.description}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>)
            }


        </>
    );
};

export default page;