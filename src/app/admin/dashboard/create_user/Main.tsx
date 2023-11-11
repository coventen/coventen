'use client'
import { Fragment, use, useState } from 'react';
import { Tab } from '@headlessui/react';
import GeneralInfo from './(components)/GeneralInfo';
import CompanyInfo from './(components)/CompanyInfo';
import AddressInfo from './(components)/AddressInfo';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useMutation, useQuery } from 'graphql-hooks';
import Loading from '@/app/loading';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import HandleFileUpload from '@/shared/HandleFileUpload';
import { v4 as uuidv4 } from 'uuid'


const CREATE_USER = `
mutation CreateUsers($input: [UserCreateInput!]!) {
    createUsers(input: $input) {
      info {
        nodesCreated
        relationshipsCreated
      }
    }
  }
`
const GET_USER_COUNT = `
query Counters {
  counters {
    userCount
  }
}
`

const UPDATE_COUNTER = `
mutation UpdateCounters($update: CounterUpdateInput) {
  updateCounters(update: $update) {
    info {
      nodesCreated
    }
  }
}
`



const Main = () => {


    //states

    const [currentTab, setCurrentTab] = useState<any>(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        title: '',
        department: '',
        education: '',
        experience: '',
        specialty: '',
        interest: '',
        reportingTo: '',
        bio: '',
        companyName: '',
        companyEmail: '',
        aboutCompany: '',
        companyPhone: '',
        panCardNo: '',
        gst: '',
        otherPhone: '',
        linkedin: '',
        twitter: '',
        skypeId: '',
        street: '',
        city: '',
        state: '',
        country: '',
        otherStreet: '',
        otherCity: '',
        userType: '',
        otherState: '',
        otherCountry: '',
        documents: [],
        equipments: [],
        service: [],
        industries: [],
    })


    //HOOKS     
    const client = useGqlClient()
    const router = useRouter()

    const { uploadFile } = HandleFileUpload()


    //quires
    const { data: userCountData, loading } = useQuery(GET_USER_COUNT, { client })


    //mutations
    const [createUserFn, createState] = useMutation(CREATE_USER, { client })
    const [updateCounterFn, updateCounterState] = useMutation(UPDATE_COUNTER, { client })

    //handlers
    const handleCreateUser = async (formData: any) => {

        let userCount: number
        if (userCountData?.counters[0]?.userCount == 1 || userCountData?.counters[0]?.userCount == null) {
            userCount = 1001
            await updateUserCount(userCount)
        } else {
            userCount = userCountData?.counters[0]?.userCount + 1
            await updateUserCount(userCount)
        }

        let docLinks




        if (formData?.documents.length > 0) {

            docLinks = await Promise.all(formData?.documents?.map(async (item: any) => {
                const link = await uploadFile(item, uuidv4(), 'user-documents')
                return link
            }))
        }








        if (formData.userType == 'CONSUMER') {
            const { data } = await createUserFn({
                variables: {
                    "input": [
                        {
                            "userId": `U-${userCount}`,
                            "name": formData.name,
                            "email": formData.email,
                            "phone": formData.phone,
                            "bio": formData.bio,
                            "panCardNo": formData.panCardNo,
                            "phoneNumber": formData.phone,
                            "companyName": formData.companyName,
                            "companyEmail": formData.companyEmail,
                            "gstNumber": formData.gst,
                            "title": formData.title,
                            "education": formData.education,
                            "department": formData.department,
                            "companyPhone": formData.companyPhone,
                            "linkedin": formData.linkedin,
                            "twitter": formData.twitter,
                            "skypeId": formData.skypeId,
                            "companyDescription": formData.aboutCompany,
                            "status": "APPROVED",
                            "user_type": formData.userType,
                            "createdBy": "ADMIN",
                            "createdAt": new Date().toISOString(),
                            "hasDocuments": {
                                "create": {
                                    "node": {
                                        "hasFiles": {
                                            "create": {
                                                "node": {
                                                    "links": docLinks
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "hasPrimaryaddress": {
                                "create": {
                                    "node": {
                                        "street": formData.street,
                                        "city": formData.city,
                                        "state": formData.state,
                                        "Country": formData.country,

                                    }
                                }
                            },
                            "hasSecondaryaddress": {
                                "create": {
                                    "node": {
                                        "street": formData.otherStreet,
                                        "city": formData.otherCity,
                                        "state": formData.otherState,
                                        "Country": formData.otherCountry,

                                    }
                                }
                            },
                            "isClient": {
                                "create": {
                                    "node": {
                                        "sub_type": ""
                                    }
                                }
                            }
                        }
                    ]
                }
            })

            if (data) {
                toast.success('User Created Successfully')
                router.push('/admin/dashboard/users')
            }
        }
        else if (formData.userType == 'SERVICE_PROVIDER') {
            const { data } = await createUserFn({
                variables: {
                    "input": [
                        {
                            "userId": `U-${userCount}`,
                            "name": formData.name,
                            "email": formData.email,
                            "phone": formData.phone,
                            "bio": formData.bio,
                            "panCardNo": formData.panCardNo,
                            "phoneNumber": formData.phone,
                            "companyName": formData.companyName,
                            "companyEmail": formData.companyEmail,
                            "gstNumber": formData.gst,
                            "title": formData.title,
                            "education": formData.education,
                            "department": formData.department,
                            "companyPhone": formData.companyPhone,
                            "linkedin": formData.linkedin,
                            "twitter": formData.twitter,
                            "skypeId": formData.skypeId,
                            "companyDescription": formData.aboutCompany,
                            "status": "APPROVED",
                            "user_type": formData.userType,
                            "createdBy": "ADMIN",
                            "createdAt": new Date().toISOString(),
                            "hasDocuments": {
                                "create": {
                                    "node": {
                                        "hasFiles": {
                                            "create": {
                                                "node": {
                                                    "links": docLinks
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "hasPrimaryaddress": {
                                "create": {
                                    "node": {
                                        "street": formData.street,
                                        "city": formData.city,
                                        "state": formData.state,
                                        "Country": formData.country,

                                    }
                                }
                            },
                            "hasSecondaryaddress": {
                                "create": {
                                    "node": {
                                        "street": formData.otherStreet,
                                        "city": formData.otherCity,
                                        "state": formData.otherState,
                                        "Country": formData.otherCountry,

                                    }
                                }
                            },
                            "isVendor": {
                                "create": {
                                    "node": {
                                        "industry": formData.industry,
                                        "service": formData.service,
                                        "equipmentDocs": [],
                                        "hasManyEquipment": {
                                            "create": formData.equipments?.map((item: any) => {
                                                return {
                                                    "node": {
                                                        "name": item?.name,
                                                        "model": item?.model,
                                                        "make": item?.make,
                                                        "calibrationDetails": item?.calibrationDetails,
                                                        "warranty": item?.warranty,
                                                        "yearOfInstallation": item?.yearOfInstallation
                                                    }
                                                }
                                            })
                                        }

                                    }
                                }
                            },

                        }
                    ]
                }
            })

            if (data) {
                toast.success('User Created Successfully')
                router.push('/admin/dashboard/users')
            }

        }


    }

    // [
    //     {
    //         "node": {
    //             "name": null,
    //             "model": null,
    //             "make": null,
    //             "calibrationDetails": null,
    //             "warranty": null,
    //             "attachment": null,
    //             "yearOfInstallation": null
    //         }
    //     }
    // ]


    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ');
    }

    const updateUserCount = async (count: number) => {
        const { data } = await updateCounterFn({
            variables: {
                update: {
                    userCount: count
                }
            }
        })
    }




    if (createState?.loading || loading) return <Loading />


    return (
        <div className="w-full">
            <div className="">
                <Tab.Group selectedIndex={currentTab} onChange={setCurrentTab}>
                    <Tab.List className="flex space-x-1 rounded-sm bg-gray-100 p-1 max-w-2xl ">
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-sm py-2.5 text-sm font-medium leading-5 text-gray-900',
                                    '',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-gray hover:bg-blue/[0.12] hover:text-blue'
                                )
                            }
                        >
                            General Info
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-sm py-2.5 text-sm font-medium leading-5 text-gray-900',
                                    '',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-gray hover:bg-blue/[0.12] hover:text-blue'
                                )
                            }
                        >
                            Company Info
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-sm py-2.5 text-sm font-medium leading-5 text-gray-900',
                                    '',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-gray hover:bg-blue/[0.12] hover:text-blue'
                                )
                            }
                        >
                            Address
                        </Tab>


                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <GeneralInfo setCurrentTab={setCurrentTab} formData={formData} setFormData={setFormData} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <CompanyInfo setCurrentTab={setCurrentTab} formData={formData} setFormData={setFormData} />
                        </Tab.Panel>

                        <Tab.Panel>
                            <AddressInfo handleCreateUser={handleCreateUser} setCurrentTab={setCurrentTab} formData={formData} setFormData={setFormData} />
                        </Tab.Panel>

                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
};
export default Main;