import { User } from '@/gql/graphql';
import Cookies from 'js-cookie';
import React from 'react';
import EquipmentTable from './EquipmentTable';




const getUser = async (id: string) => {

    const token = Cookies.get('conventenToken');
    const res = fetch('https://coventenapp.el.r.appspot.com/', {
        method: 'POST',
        headers: {
            "authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `  query Users($where: UserWhere) {
                users(where: $where) {
                  userId
                  name
                  email
                  phone
                  bio
                  id
                  panCardNo
                  phoneNumber
                  companyName
                  companyEmail
                  gstNumber
                  title
                  education
                  department
                  companyPhone
                  linkedin
                  twitter
                  skypeId
                  experience
                  specialty
                  interest
                  companyDescription
                  status
                  user_type
                  createdBy
                  createdAt
                  hasDocuments {
                    hasFiles {
                      links
                    }
                  }
                  isVendor {
                    industry
                    service
                    hasManyEquipment {
                        name
                        model
                        make
                        calibrationDetails
                        warranty
                        yearOfInstallation
                      }
                  }
                  hasPrimaryaddress {
                    id
                    street
                    city
                    state
                    Country
                    zipCode
                  }
                  hasSecondaryaddress {
                    id
                    street
                    city
                    state
                    Country
                    zipCode
                  }
                }
              }`,
            variables: {
                where: {
                    id: id
                },
            },

        })
    })

    const { data } = await res.then(res => res.json())

    return data?.users[0]

}


const UserInfo = async ({ params }: { params: any }) => {

    const userData: User = await getUser(params?.id || 'no id')

    console.log(userData?.isVendor, '777')

    return (
        <section className='bg-white p-2 lg:p-8'>
            <div>
                <h1 className='text-4xl font-semibold my-6'>
                    User Details
                </h1>
            </div>

            <div>
                <h3 className='text-lg font-semibold mb-3'>General Information</h3>

                <div className='grid grid-cols-3 gap-3 text-sm'>
                    <p>
                        Account Type : {userData?.user_type === "SERVICE_PROVIDER" ? "Vendor" : "Client"}
                    </p>
                    <p>
                        Name : {userData?.name || 'N/A'}
                    </p>
                    <p>
                        Email : {userData?.email || 'N/A'}
                    </p>
                    <p>
                        Phone Number : {userData?.phoneNumber || 'N/A'}
                    </p>
                    <p>
                        Title : {userData?.title || 'N/A'}
                    </p>

                    <p>
                        Eduction: {userData?.education || 'N/A'}
                    </p>
                    <p>
                        Department: {userData?.department || 'N/A'}
                    </p>
                    <p>
                        Interest: {userData?.interest || 'N/A'}
                    </p>
                    <p className='col-span-full'>
                        Bio: {userData?.bio || 'N/A'}
                    </p>
                </div>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-3 mt-8'>Company Information</h3>

                <div className='grid grid-cols-3 gap-3 text-sm'>
                    <p className='col-span-full'>
                        About : {userData?.companyDescription || 'N/A'}
                    </p>
                    <p>
                        Company Name : {userData?.companyName || 'N/A'}
                    </p>
                    <p>
                        Company Email : {userData?.companyEmail || 'N/A'}
                    </p>
                    <p>
                        Company Phone Number : {userData?.companyPhone || 'N/A'}
                    </p>
                    <p>
                        Other Phone Number : {userData?.phone || 'N/A'}
                    </p>
                    <p>
                        GST Number : {userData?.gstNumber || 'N/A'}
                    </p>
                    <p>
                        Pan Card Number : {userData?.panCardNo || 'N/A'}
                    </p>

                    {
                        userData?.user_type === "SERVICE_PROVIDER" && <>
                            <ul className='list-disc list-inside'>
                                <h3>Services</h3>
                                {
                                    userData?.isVendor && userData?.isVendor?.service?.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))
                                }
                            </ul>
                            <ul className='list-disc list-inside'>
                                <h3>Industries</h3>
                                {
                                    userData?.isVendor && userData?.isVendor?.industry?.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))
                                }
                            </ul>


                        </>
                    }
                    <ul className='list-disc list-inside'>
                        <h3>Social Media</h3>
                        <li>
                            Linkedin : {userData?.linkedin}
                        </li>
                        <li>
                            Twitter : {userData?.twitter}
                        </li>
                        <li>
                            Skype : {userData?.skypeId}
                        </li>
                    </ul>

                    {
                        userData?.user_type === "SERVICE_PROVIDER" &&
                        <div className='col-span-full'>

                            <h4 className='font-semibold mt-6 mb-3'>
                                Equipment Details
                            </h4>
                            <EquipmentTable data={userData?.isVendor?.hasManyEquipment} />
                        </div>
                    }

                </div>
            </div>

            <div>
                <h3 className='text-lg font-semibold mb-3 mt-10'>Address</h3>

                <div className='grid grid-cols-3 gap-3 text-sm'>
                    <p className='col-span-full font-bold'>
                        Primary Address
                    </p>
                    <p>
                        Street : {userData?.hasPrimaryaddress?.street || 'N/A'}
                    </p>
                    <p>
                        City : {userData?.hasPrimaryaddress?.city || 'N/A'}
                    </p>
                    <p>
                        State : {userData?.hasPrimaryaddress?.state || 'N/A'}
                    </p>
                    <p>
                        Country : {userData?.hasPrimaryaddress?.Country || 'N/A'}
                    </p>
                    <p>
                        Zip Code : {userData?.hasPrimaryaddress?.zipCode || 'N/A'}
                    </p>
                    <p className='col-span-full font-bold'>
                        Secondary Address
                    </p>
                    <p>
                        Street : {userData?.hasSecondaryaddress?.street || 'N/A'}
                    </p>
                    <p>
                        City : {userData?.hasSecondaryaddress?.city || 'N/A'}
                    </p>
                    <p>
                        State : {userData?.hasSecondaryaddress?.state || 'N/A'}
                    </p>
                    <p>
                        Country : {userData?.hasSecondaryaddress?.Country || 'N/A'}
                    </p>
                    <p>
                        Zip Code : {userData?.hasSecondaryaddress?.zipCode || 'N/A'}
                    </p>
                </div>
            </div>

        </section>
    );
};

export default UserInfo;