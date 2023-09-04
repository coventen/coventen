import { FaFirefox } from "react-icons/fa";




export default function Companies({ clients }: { clients: any[] }) {
    return (
        <div className="py-14 bg-bgLight">
            <div className="max-w-screen-2xl mx-auto px-2 lg:px-12">
                <section className="relative pt-28 pb-36 bg-blueGray-100 overflow-hidden">
                    <img className="absolute top-0 left-0" src="flaro-assets/images/logos/gradient3.svg" alt="" />
                    <div className="relative z-10 container px-4 mx-auto">
                        <p className="mb-14 text-base  text-center font-semibold uppercase tracking-px">Powering next-gen companies</p>
                        <div className="flex flex-wrap max-w-5xl mx-auto -m-3">


                            {
                                clients && clients.map((item, idx) =>
                                    <div key={item.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
                                        <div className="flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl">
                                            <div className="flex items-center space-x-1 font-bold">
                                                <img src={item?.logo} alt="" />
                                                <span>{item?.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }



                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}