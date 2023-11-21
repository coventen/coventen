
import React from 'react';


interface IProps {
    setFormData: any,
    formData: any,
    setCurrentTab: any,
    handleCreateUser: any
}



const AddressInfo = async ({ setFormData, formData, handleCreateUser }: IProps) => {

    const [loading, setLoading] = React.useState(false)


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const { street, city, state, country, otherStreet, otherCity, otherState, otherCountry } = e.target

        setFormData({
            ...formData,
            street: street.value,
            city: city.value,
            state: state.value,
            country: country.value,
            otherStreet: otherStreet.value,
            otherCity: otherCity.value,
            otherState: otherState.value,
            otherCountry: otherCountry.value,
        })

        handleFirebaseUserCreate(formData.email, formData.password)


    };





    const handleFirebaseUserCreate = async (email: string, password: string) => {


        try {
            setLoading(true)
            const res: any = await fetch('http://localhost:3000/api/create_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })

            })

            if (res.status === 201) {
                setLoading(false)

            }


            if (res?.error) {
                console.log(res.error)
                setLoading(false)
            } else {
                handleCreateUser(formData)
                setLoading(false)
            }
        } catch (err) {
            console.log(err, ' this is error')
            setLoading(false)
        }

    }




    return (
        <section className='mt-6'>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                <p className='text-gray-700 text-md font-semibold mb-4 col-span-full'>Primary Address</p>

                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Street
                    </label>
                    <input
                        name="street"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        City
                    </label>
                    <input

                        name="city"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        State
                    </label>
                    <input

                        name="state"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Country
                    </label>
                    <input

                        name="country"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <p className='text-gray-700 mt-5 text-md font-semibold mb-4 col-span-full'>Other Address</p>

                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Street
                    </label>
                    <input

                        name="otherStreet"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        City
                    </label>
                    <input

                        name="otherCity"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        State
                    </label>
                    <input

                        name="otherState"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-5">
                    <label className="block  text-gray-700 text-sm mb-1">
                        Country
                    </label>
                    <input

                        name="otherCountry"
                        type="text"
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                    />
                </div>









                <div className="mt-6 col-span-full">
                    <button
                        type="submit"
                        className="px-10 py-2 bg-primary text-white hover:bg-blue-600"
                    >
                        Create user
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddressInfo;