'use client'
import Loading from '@/app/loading';
import Button from '@/components/Button';
import Error from '@/components/Error';
import AuthConfig from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';

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
            const { name, user_type, email, address, bio, companyName, companyEmail, gstNumber, image, zip, city, state } = userData
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
            })
        }
    }, [userData])



    // updating the user node

    const updateUser = async () => {
        const { name, user_type, email, address, bio, companyName, companyEmail, gstNumber, image, zip, city, state } = userInfo

        console.log(userInfo)

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


    if (loading || updateUserState.loading) return <div><Loading /></div>

    if (updateUserState.error || error) return <div><Error /></div>


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-3/4 gap-6">
            <label className="block">
                <span className="mb-1">User Name</span>
                <input value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
            </label>
            <label className="block">
                <span className="mb-1">Email address</span>
                <input value={userInfo.email} type="text" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
            </label>
            <label className="block lg:col-span-2">
                <span className="mb-1">Company name</span>
                <input value={userInfo.companyName} onChange={(e) => setUserInfo({ ...userInfo, companyName: e.target.value })} type="text" placeholder="Company name" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
            </label>
            <label className="block">
                <span className="mb-1">Company email</span>
                <input value={userInfo.companyEmail} onChange={(e) => setUserInfo({ ...userInfo, companyEmail: e.target.value })} type="text" placeholder="45679" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
            </label>
            <label className="block">
                <span className="mb-1">Gst No.</span>
                <input value={userInfo.gstNumber} onChange={(e) => setUserInfo({ ...userInfo, gstNumber: e.target.value })} type="text" placeholder="45679" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
            </label>
            <label className="block lg:col-span-2">
                <span className="mb-1">Address</span>
                <input value={userInfo.address} onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })} type="text" placeholder="45679" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
            </label>
            <label className="block">
                <span className="mb-1">City</span>
                <input value={userInfo.city} onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })} type="text" placeholder="45679" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
            </label>
            <label className="block">
                <span className="mb-1">State</span>
                <input value={userInfo.state} onChange={(e) => setUserInfo({ ...userInfo, state: e.target.value })} type="text" placeholder="45679" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
            </label>
            <label className="block">
                <span className="mb-1">ZIP / Postal</span>
                <input value={userInfo.zip} onChange={(e) => setUserInfo({ ...userInfo, zip: e.target.value })} type="text" placeholder="45679" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
            </label>

            <label className="block col-span-2">
                <span className="mb-1">Bio</span>
                <textarea value={userInfo.bio} onChange={(e) => setUserInfo({ ...userInfo, bio: e.target.value })} rows={5} placeholder="Bio" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 py-4" />
            </label>

            <div className="flex  w-full">
                <div className="w-full mb-5 mt-6">
                    <button onClick={updateUser} className="block text-xl w-full  bg-desktopPrimary/80 hover:bg-desktopPrimary focus:bg-desktopPrimary text-white rounded-lg px-3 py-4 font-semibold">Update Now</button>
                </div>
            </div>
        </div>
    );
};

export default Main;