import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

interface IServiceFrom {
    index: number
    services: any[]
    setServices: (services: any[]) => void
}



const ServicesFrom = ({ index, setServices, services }: IServiceFrom) => {

    // hook from 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>()



    // setting the module data
    const handleServices: SubmitHandler<any> = (data) => {

        console.log("inside handle services")
        //getting the dynamic data
        const serviceName = data[`serviceName${index}`];
        const price = data[`price${index}`];




        // checking if all data is present
        if (serviceName && price) {
            const serviceData = {
                serviceName,
                price,
            };

            // checking if the module is already present
            const moduleIndex = services.findIndex(module => module.hasOwnProperty(`serviceName${index}`));

            // updating the module
            if (moduleIndex !== -1) {
                const updatedModules = [...services];
                updatedModules[moduleIndex][`serviceName${index}`] = serviceData;
                setServices(updatedModules);
            } else {
                const newModule = {
                    [`serviceName${index}`]: serviceData
                };
                setServices([...services, newModule]);
            }
        }
    };


    return (
        <form onChange={handleSubmit(handleServices)} className='grid lg:grid-cols-5 gap-6'>
            <div className="md:col-span-4">
                <label htmlFor="">Service Name</label>
                <input type="text" id="" className="h-10 border border-gray-300 mt-1 rounded px-4 w-full " placeholder=""  {...register(`serviceName${index}`)} />
            </div>

            <div className="md:col-span-1">
                <label htmlFor="">Price</label>
                <input type="text" className="h-10 border border-gray-300 mt-1 rounded px-4 w-full " placeholder="" {...register(`price${index}`)} />
            </div>
        </form>
    );
};

export default ServicesFrom;