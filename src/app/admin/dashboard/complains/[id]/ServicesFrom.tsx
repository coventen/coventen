import { Invoice, Service } from '@/gql/graphql';
import React from 'react';



interface IServiceFrom {
    data: any
    setPreviousData: (data: Invoice) => void
    previousData: Invoice
}


const ServicesFrom = ({ data, setPreviousData, previousData }: IServiceFrom) => {

    const [serviceData, setServiceData] = React.useState<any>(data)


    const handleServiceChange = (e: any) => {
        const filteredData = previousData.hasPurchase.filter((service: any) => service.itemName !== data.itemName)

        setPreviousData({
            ...previousData,
            hasPurchase: [...filteredData, serviceData]
        })

    }



    return (
        <form onChange={handleServiceChange} className='grid lg:grid-cols-5 gap-6'>
            <div className="md:col-span-4">
                <label htmlFor="">Service Name</label>
                <input
                    defaultValue={serviceData?.itemName || ''}
                    onChange={(e) => setServiceData({ ...serviceData, itemName: e.target.value as string })}
                    type="text" id=""
                    className="h-10 border border-gray-300 mt-1 rounded px-4 w-full " placeholder="" />
            </div>

            <div className="md:col-span-1">
                <label htmlFor="">Price</label>
                <input defaultValue={serviceData?.price || ''}
                    onChange={(e) => setServiceData({ ...serviceData, price: parseInt(e.target.value) })}
                    type='number' className="h-10 border border-gray-300 mt-1 rounded px-4 w-full " placeholder="" />
            </div>
        </form>
    );
};

export default ServicesFrom;