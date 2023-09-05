'use client'
import React from 'react';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import IndustryModal from './IndustryModal';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation } from 'graphql-hooks';
import AuthConfig from '@/firebase/oauth.config';
import { toast } from 'react-hot-toast';


const UPDATE_USER = `mutation Mutation($where: UserWhere, $update: UserUpdateInput) {
    updateUsers(where: $where, update: $update) {
        users {
          id
        }
      }
  }`



// component
const Industries = ({ data, refetch }: { data: string[], refetch: any }) => {

    console.log(data, 'data')

    // states
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    // hooks
    const client = useGqlClient()
    const { user } = AuthConfig()

    // updating the user node
    const [updateUserFn, updateUserState] = useMutation(UPDATE_USER, { client })




    const deleteIndustry = async (industry: string) => {
        const updatedIndustries = data.filter((item: string) => item !== industry)
        console.log(data, 'data')
        console.log(updatedIndustries, 'ddd', industry)


        const { data: updateDta } = await updateUserFn({
            variables: {
                "where": {
                    "email": user?.email
                },
                "update": {
                    "isVendor": {
                        "update": {
                            "node": {
                                "industry": updatedIndustries
                            }
                        }
                    }
                }
            }
        })
        if (updateDta.updateUsers.users[0].id) {
            toast.error('Industry deleted')
            refetch()
        }

    }


    const addIndustry = async (industry: string[]) => {

        const combinedArray = [...data, industry]
        const uniqueArray = [...new Set(combinedArray)]

        console.log(uniqueArray, 'uniq000000000000000000000000000000')

        console.log(industry, 'industry00000000000000000000000000000000000000000')

        const { data: updateDta } = await updateUserFn({
            variables: {
                "where": {
                    "email": user?.email
                },
                "update": {
                    "isVendor": {
                        "update": {
                            "node": {
                                "industry": ['Automotive and EV', 'Composite Meteials & Plastics', 'Construction']
                            }
                        }
                    }
                }
            }
        })


        console.log(updateDta, 'updateDta0000000000000000000')
        if (updateDta.updateUsers.users[0].id) {
            toast.success('Industry added')
            setIsModalOpen(false)
            refetch()
        }

    }


    // render
    return (
        <div className="relative flex flex-col mt-6 justify-center bg-white max-w-xs py-4 px-1  shadow-sm rounded-xl sm:px-7 dark:bg-gray-900 dark:text-gray-100">
            {/* edit button */}
            <div>
                <button type='button' onClick={() => setIsModalOpen(true)} className="absolute top-3 right-0 p-2 hover:bg-gray-200 rounded-full  dark:bg-gray-900 dark:text-gray-100">
                    <BiMessageSquareEdit />
                </button>
            </div>

            <div className="space-y-4 text-gray-800 mt-2">
                <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold text-center sm:text-2xl">Industries</h2>
                </div>
                <ul className="my-2 space-y-2 ">
                    {
                        data && data.map((item, i) =>
                            <li key={item}
                                className=" text-xs md:text-sm font-normal sm:text-2xl flex items-center justify-between">
                                <p>
                                    {item}
                                </p>
                                <button type='button' onClick={() => deleteIndustry(item)} className='text-gray-700 text-lg'><MdDelete /></button>
                            </li>

                        )
                    }


                </ul>

            </div>
            <IndustryModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} addIndustry={addIndustry} />
        </div>
    );
};

export default Industries;