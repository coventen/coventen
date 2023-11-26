'use client'
import Loading from '@/app/loading';
import Button from '@/components/Button';
import AuthConfig from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { BiEdit } from 'react-icons/bi';

const GET_USER = `query Users($where: UserWhere) {
    users(where: $where) {
      name
      user_type
      email
      address
      bio
    
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
        image: '',
        zip: '',
        city: '',
        state: '',
    })


    //hooks
    const client = useGqlClient()
    const { user } = AuthConfig()


    // fetching data
    const { data, error, loading } = useQuery(GET_USER, {
        client,
        variables: { where: { email: user?.email } }
    })

    // updating the user node
    const [updateUserFn, updateUserState] = useMutation(UPDATE_USER, { client })


    // updating the user node
    const userData = data?.users[0]

    // setting the user data  to the state
    useEffect(() => {
        if (userData) {
            const { name, user_type, email, address, bio, image, zip, city, state } = userData
            setUserInfo({
                name,
                user_type,
                email,
                address,
                bio,
                image,
                zip,
                city,
                state,
            })
        }
    }, [userData])



    // updating the user node

    const updateUser = async () => {
        const { name, user_type, email, address, bio, image, zip, city, state } = userInfo
        const { data, error } = await updateUserFn({
            variables: {
                where: { email },
                update: {
                    name,
                    user_type,
                    email,
                    address,
                    bio,
                    image,
                    zip,
                    city,
                    state,
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
        <form className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <div className="flex flex-col justify-center relative bg-white max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                        <img src={userInfo.image || '/assets/no_user.png'} className='w-32 mx-auto' />
                        <div className="space-y-4 text-center divide-y divide-gray-700">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">{userInfo.name}</h2>
                                <p className="px-5 text-[10px] capitalize sm:text-base dark:text-gray-400">{userInfo.user_type}</p>
                            </div>

                        </div>
                        <div className='absolute top-3 right-2 test-lg ' >
                            <input
                                type="file"
                                id="fileInput"
                                className='hidden'
                            // onChange={(e) => handleFileInputChange(e)}
                            />
                            <label htmlFor="fileInput" className="absolute top-3 right-2 text-lg cursor-pointer">
                                <BiEdit />
                            </label>
                        </div>
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
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                            type="email" placeholder="Email" className="w-full rounded-md focus:ring ring-primary dark:border-gray-700 dark:text-gray-900" />
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">Address</label>
                        <input
                            value={userInfo.address}
                            onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
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

        </form>
    );
};

export default Main;