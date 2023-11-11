'use client'
import Loading from '@/app/loading';
import Button from '@/components/Button';
import AuthConfig from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { BiMessageSquareEdit } from 'react-icons/bi';

const GET_USER = `query Users($where: UserWhere) {
    users(where: $where) {
      name
      user_type
      email
      address
      bio
      companyName
      companyEmail
      gstNumber
      image
      zip
      city
      state
      panCardNo
      mobile
      secondAddress
      hasDocuments {
        hasFiles {
          id
          links
        }
      }
    }
  }`

const UPDATE_USER = `mutation Mutation($where: UserWhere, $update: UserUpdateInput) {
    updateUsers(where: $where, update: $update) {
        users {
          id
        }
      }
  }`

const Main = () => {

    //states
    const [userInfo, setUserInfo] = React.useState({
        name: '',
        user_type: '',
        email: '',
        address: '',
        bio: '',
        companyName: '',
        companyEmail: '',
        gstNumber: '',
        image: '',
        zip: '',
        city: '',
        state: '',
        secondAddress: '',
        mobile: '',
        panCardNo: '',
    })


    //hooks
    const client = useGqlClient()
    const { user } = AuthConfig()


    // fetching data
    const { data, error, loading } = useQuery(GET_USER, {
        client,
        variables: { where: { email: user?.email, user_type: "CONSUMER" } }
    })

    // updating the user node
    const [updateUserFn, updateUserState] = useMutation(UPDATE_USER, { client })


    // updating the user node
    const userData = data?.users[0]

    // setting the user data  to the state
    useEffect(() => {
        if (userData) {
            const { name, user_type, email, address, bio, companyName, companyEmail, secondAddress, mobile, panCardNo, gstNumber, image, zip, city, state } = userData
            setUserInfo({
                name,
                user_type,
                email,
                address,
                bio,
                companyName,
                companyEmail,
                gstNumber,
                image,
                zip,
                city,
                state,
                secondAddress,
                mobile,
                panCardNo,
            })
        }
    }, [userData])




    // updating the user node

    const updateUser = async () => {
        const { name, user_type, email, address, bio, companyName, secondAddress, mobile, panCardNo, companyEmail, gstNumber, image, zip, city, state } = userInfo
        const { data, error } = await updateUserFn({
            variables: {
                where: { email },
                update: {
                    name,
                    user_type,
                    email,
                    address,
                    bio,
                    companyName,
                    companyEmail,
                    gstNumber,
                    image,
                    zip,
                    city,
                    state,
                    secondAddress,
                    mobile,
                    panCardNo,
                }
            }
        })
        if (data.updateUsers.users[0].id) {
            toast.success('User updated successfully')
        }
        if (error) {
            toast.success('Something went wrong')
        }
    }


    if (loading) return <div><Loading /></div>


    return (
        <div className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <div className="relative flex flex-col mt-6 justify-center bg-white max-w-xs py-4 px-1  shadow-sm rounded-xl sm:px-7 dark:bg-gray-900 dark:text-gray-100">


                        <div className="space-y-4 text-gray-800 mt-2">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold text-center sm:text-2xl">Documents</h2>
                            </div>
                            <div className='mt-3 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6'>
                                {
                                    data?.users[0]?.hasDocuments?.hasFiles?.links ?
                                        data?.users[0]?.hasDocuments?.hasFiles?.links?.map((item: any, index: number) =>
                                            <Link href={item || '#'}
                                                target='_blank'
                                                key={index}
                                                style={{
                                                    backgroundImage: `url(${'/assets/file.svg'})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                    backgroundSize: "cover"

                                                }}
                                                className=' h-28 w-24 text-xs flex items-center justify-center text-gray-800  font-semibold'>
                                                document-{index + 1}
                                            </Link>

                                        )
                                        :

                                        <p className='mt-3 text-sm col-span-full'>No Document Found</p>
                                }


                            </div>

                        </div>
                        {/* <AddServiceModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} addService={addService} /> */}
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-2">

                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="lastname" className="text-sm" >Username</label>
                        <input
                            type="text"
                            value={userInfo.name}
                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                            placeholder="Last name" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input
                            readOnly
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                            type="email" placeholder="Email" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="website" className="text-sm">Gst no.</label>
                        <input
                            value={userInfo.gstNumber}
                            onChange={(e) => setUserInfo({ ...userInfo, gstNumber: e.target.value })}
                            id="website" type="text" placeholder="Gst no." className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">Company Name</label>
                        <input
                            value={userInfo.companyName}
                            onChange={(e) => setUserInfo({ ...userInfo, companyName: e.target.value })}
                            id="address" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">Company Email</label>
                        <input
                            value={userInfo.companyEmail}
                            onChange={(e) => setUserInfo({ ...userInfo, companyEmail: e.target.value })}
                            id="address" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">Pan Card No</label>
                        <input
                            required
                            value={userInfo.panCardNo || ''}
                            onChange={(e) => setUserInfo({ ...userInfo, panCardNo: e.target.value })}
                            id="address" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">Mobile Number</label>
                        <input
                            required
                            value={userInfo.mobile || ''}
                            onChange={(e) => setUserInfo({ ...userInfo, mobile: e.target.value })}
                            id="address" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">Address</label>
                        <input
                            value={userInfo.address}
                            onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                            id="address" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">Second Address</label>
                        <input
                            required
                            value={userInfo.secondAddress || ''}
                            onChange={(e) => setUserInfo({ ...userInfo, secondAddress: e.target.value })}
                            id="address" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>

                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="city" className="text-sm">City</label>
                        <input
                            value={userInfo.city}
                            onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
                            id="city" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="state" className="text-sm">State / Province</label>
                        <input
                            value={userInfo.state}
                            onChange={(e) => setUserInfo({ ...userInfo, state: e.target.value })}
                            id="state" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                        <input
                            value={userInfo.zip}
                            onChange={(e) => setUserInfo({ ...userInfo, zip: e.target.value })}
                            id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="bio" className="text-sm">Bio</label>
                        <textarea
                            value={userInfo.bio}
                            onChange={(e) => setUserInfo({ ...userInfo, bio: e.target.value })}
                            id="bio" placeholder="" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900"></textarea>
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <div onClick={updateUser}>

                            <Button title={updateUserState.loading ? "loading.." : "Update"} />
                        </div>
                    </div>
                </div>


            </fieldset>

        </div>
    );
};

export default Main;