'use client'
import { useGqlClient } from '@/hooks/UseGqlClient';
import { Dialog, Transition } from '@headlessui/react';
import { useManualQuery, useQuery } from 'graphql-hooks';
import { Fragment, useEffect, useState } from 'react';
import ProductSelect from './ProductSelect';

//props interface
interface INotificationModal {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    addProduct: (title: string[]) => void;
}

const GET_PRODUCTS = `
query Products($where: ProductWhere, $options: ProductOptions) {
    products(where: $where, options: $options) {
      id
      title
    }
  }
`

//component
function AddProductModal({ isOpen, setIsOpen, addProduct }: INotificationModal) {




    //states
    const [title, setTitle] = useState('');
    const [searchText, setSearchText] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<any[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

    //hooks 
    const client = useGqlClient()

    const [productDataFn, productState] = useManualQuery(GET_PRODUCTS, { client })




    useEffect(() => {
        getProducts(searchText)
    }, [searchText])



    const getProducts = async (where: string) => {
        const { data } = await productDataFn({
            variables: {
                "where": {
                    "title_CONTAINS": where
                },
                "options": {
                    "limit": 3
                }
            }
        })
        if (data?.products?.length) {
            setFilteredOptions(data.products)
        }
    }



    //creating 
    async function handleSubmit(event: any) {
        event.preventDefault();
        if (selectedOptions.length) {
            const ids = selectedOptions.map((item) => item.id)
            addProduct(ids)
        }

    }


    //handle close modal
    function closeModal() {
        setIsOpen(false);
    }




    //render
    return (
        <div>


            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-[120000000000] inset-0 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                        </Transition.Child>

                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >

                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 min-h-[300px]">
                                <p className="focus:outline-none pt-4 pb-8 text-base text-center sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Update Home Products</p>
                                <form onSubmit={handleSubmit} className=''>
                                    <div className="mb-5">
                                        <label htmlFor="title" className="block  text-gray-700 text-sm mb-1">
                                            Select Products
                                        </label>
                                        <div className='relative'>
                                            <ProductSelect
                                                setSelectedOptions={setSelectedOptions}
                                                selectedOptions={selectedOptions}
                                                searchText={searchText}
                                                setSearchText={setSearchText}
                                                filteredOptions={filteredOptions}
                                                loading={productState.loading}
                                            />
                                        </div>
                                    </div>




                                    <div className="mt-10">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            className="ml-2 px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}

export default AddProductModal;
