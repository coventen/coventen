'use client'
import AutoComplete from '@/components/AutoComplete';
import { useForm, SubmitHandler, set } from "react-hook-form"
import React, { useEffect } from 'react';
import ModuleFrom from './ModuleFrom';
import { IModuleInput, IProjectInput } from './createProject.interface';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import AuthConfig from '@/firebase/oauth.config';
import { generateUniqueId } from '@/shared/genarateUniqueId';
import { toast } from 'react-hot-toast';
import Loading from '@/app/loading';
import { useRouter } from 'next/navigation';
import HandleFileUpload from '@/shared/HandleFileUpload';
import { v4 as uuidv4 } from 'uuid';
import createLog from '@/shared/graphQl/mutations/createLog';




const CREATE_PROJECT = `mutation Mutation($input: [ProjectCreateInput!]!) {
    createProjects(input: $input) {
      info {
        nodesCreated
      }
    }
  }`
const GET_USER = `query Query($where: UserWhere) {
    users(where: $where) {
      companyName
      gstNumber
    }
  }`
const GET_PROJECT_COUNTER = `query Query {
    counters {
      projectCount
      moduleCount
      invoiceCount
    }
  }`
const UPDATE_PROJECT_COUNTER = `
mutation UpdateCounters($update: CounterUpdateInput) {
    updateCounters(update: $update) {
      counters {
        projectCount
      }
    }
  }


  `
const SEND_NOTIFICATION = `
  mutation CreateNotifications($input: [NotificationCreateInput!]!) {
      createNotifications(input: $input) {
        info {
          nodesCreated
        }
      }
    }`


//component
const Main = () => {

    //states
    const [moduleCount, setModuleCount] = React.useState(1)
    const [selectedCompany, setSelectCompany] = React.useState(null);
    const [modules, setModules] = React.useState<any[]>([]);
    const [uploading, setUploading] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({

        address: '',
        gstNumber: '',
        companyName: '',
        zip: '',
        city: '',
        state: '',
        priority: '',
        type: '',
    })



    // console.log(modules, 'this is modules')

    //hooks
    const { user } = AuthConfig()
    const router = useRouter()
    const client = useGqlClient()
    const { uploadFile } = HandleFileUpload()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProjectInput>()





    //query
    const [counterFn, counterState] = useManualQuery(GET_PROJECT_COUNTER, { client })
    const { data, loading, error } = useQuery(GET_USER, {
        client,
        variables: {
            where: {
                email: user?.email
            }

        }
    });


    // mutations
    const [createProjectFn, state, resetFn] = useMutation(CREATE_PROJECT, { client })
    const [updateProjectCounterFn, updateState] = useMutation(UPDATE_PROJECT_COUNTER, { client })
    const [sendNotificationFn, notificationState] = useMutation(SEND_NOTIFICATION, { client })




    //submitting form for project creation
    const handleProjectSubmit = (data: IProjectInput) => {
        createProject(data)
    }

    //handle project creation 
    const createProject = async (projectData: IProjectInput) => {
        setUploading(true)
        const { projectDescription, projectName } = projectData
        const projectId = await generateProjectTicket()
        setUploading(false)

        // uploading files -> create module data
        const moduleDataPromise = await modules.map(async (module, i) => {
            const title = module[`moduleTitle${i + 1}`].title
            const description = module[`moduleTitle${i + 1}`].description
            const documents = module[`moduleTitle${i + 1}`].documents
            return {
                node: {
                    title: title,
                    description: description,
                    files: await uploadFiles(documents.files)

                }
            }
        })

        const moduleData = await Promise.all(moduleDataPromise)

        const { data } = await createProjectFn({
            variables: {
                input: [
                    {
                        title: projectName,
                        description: projectDescription,
                        email: user?.email,
                        companyName: userInfo.companyName,
                        type: userInfo.type,
                        priority: userInfo.priority,
                        createdAt: new Date().toISOString(),
                        projectticketFor: {
                            create: {
                                node: {
                                    projectTicket: projectId
                                }
                            }
                        },
                        clientOrdered: {
                            connect: {
                                where: {
                                    node: {
                                        userIs: {
                                            email: user?.email
                                        }
                                    }
                                }
                            }
                        },
                        hasModule: {
                            create: moduleData
                        }
                    }
                ]
            }
        })
        if (data.createProjects.info.nodesCreated) {
            toast.success('Project created successfully')
            router.push('/user/dashboard/projects')
            sendNotification(projectId as string)
            createLog(
                `Project Creation`,
                `Project created with ticket ${projectId} by ${user?.email}`
            )
        }


    }




    // making change able  data
    const userData = data?.users[0]
    useEffect(() => {
        if (userData) {
            const { address, companyName, gstNumber, zip, city, state, type, priority } = userData
            setUserInfo({
                address,
                companyName,
                gstNumber,
                zip,
                city,
                state,
                type,
                priority
            })
        }
    }, [userData])



    // upload files
    const uploadFiles = async (files: File[]) => {
        setUploading(true)

        const filePromise = files.map(async (file) => {
            const data = await uploadFile(file, `${file.name}-${uuidv4()}`, "ModuleDocuments");
            return data;
        });
        const fileLinks = await Promise.all(filePromise);
        setUploading(false)

        return fileLinks;
    }


    // generating project ticket based on project count on database
    const generateProjectTicket = async () => {
        const { data } = await counterFn()
        const counter = data?.counters[0]
        if (counter?.projectCount) {
            const projectCount = counter?.projectCount + 1
            const projectTicket = generateUniqueId("P-", projectCount)
            // updating project counter
            updateProjectCounterFn({
                variables: {
                    update: {
                        projectCount: projectCount,
                    }
                }
            })
            return projectTicket
        }
        return null
    }


    if (moduleCount < 1) {
        setModuleCount(1)
    }





    const sendNotification = async (projectId: string) => {

        const { data: adminData } = await sendNotificationFn({
            variables: {
                "input": [
                    {
                        "title": `A user has created a new project`,
                        "description": `A user has created a new project with ticket ${projectId}`,
                        "createdAt": new Date().toISOString(),
                        "notificationFor": "ADMIN",
                    }
                ]
            }
        })

    }






    if (loading || uploading || state.loading || counterState.loading) return <div><Loading /></div>

    //render
    return (

        <div className="">
            <div className="container max-w-screen-lg mx-auto">
                <div>

                    <form onSubmit={handleSubmit(handleProjectSubmit)} className="bg-white rounded p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">


                            <div className="lg:col-span-2">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">



                                    {/* project details */}

                                    <div className="col-span-full">
                                        <label htmlFor="address">Project name</label>
                                        <input type="text" id="address" className="h-10 border border-gray-300 mt-1 rounded px-4 w-full " placeholder=""   {...register('projectName')} />
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="city">Project Description</label>
                                        <textarea rows={4} id="city" className=" border border-gray-300 mt-1 rounded px-4 w-full " placeholder="" {...register("projectDescription")} />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="city">Type</label>
                                        <select id="city" className=" border border-gray-300 mt-1 rounded px-4 w-full " placeholder="" {...register("type")} >
                                            <option value="web">Service</option>
                                            <option value="mobile">Product
                                            </option>
                                            <option value="both">Solution</option>
                                            <option value="both">Learn</option>
                                            <option value="both">Events
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="city">Priority:</label>
                                        <select id="city" className=" border border-gray-300 mt-1 rounded px-4 w-full " placeholder="" {...register("priority")} >
                                            <option value="web">Top Priority – response in 2hrs</option>
                                            <option value="mobile">High Priority – response in 24hrs
                                            </option>
                                            <option value="both">Medium Priority</option>
                                            <option value="both">Low Priority</option>

                                        </select>
                                    </div>



                                    {/* modules add  start */}
                                    <div className="md:col-span-5 mt-8">
                                        <div>
                                            {/* modules title */}
                                            <div className='flex  justify-between'>
                                                <p className='text-xl font-semibold text-gray-800'>
                                                    Services
                                                </p>

                                                <div>
                                                    <label >Add More Services</label>
                                                    <div className="h-10 w-28  flex border border-gray-300  rounded items-center mt-1">
                                                        <button
                                                            type='button'
                                                            onClick={() => setModuleCount(moduleCount - 1)}
                                                            className="cursor-pointer outline-none focus:outline-none border-r border-gray-300 transition-all text-gray-500 hover:text-desktopPrimary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                        <input name="soda" id="soda" placeholder="0"
                                                            className="px-2 text-center appearance-none outline-none border-none text-gray-800 w-full bg-transparent"
                                                            readOnly
                                                            value={moduleCount}
                                                        />
                                                        <button type='button' onClick={() => setModuleCount(moduleCount + 1)} className="cursor-pointer outline-none focus:outline-none border-l border-gray-300 transition-all text-gray-500 hover:text-desktopPrimary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* service inputs */}
                                            <div className='space-y-5'>
                                                {
                                                    [...Array(moduleCount)].map((_, i) =>
                                                        <div key={i} className='grid grid-cols-1 gap-4 max-w-2xl'>
                                                            <ModuleFrom index={i + 1} setModules={setModules} modules={modules} />
                                                        </div>

                                                    )
                                                }
                                            </div>


                                        </div>
                                    </div>

                                    <div className=" mt-8">
                                        <div className="">
                                            <button type='submit' className="bg-primary  text-white font-bold py-3 px-12 text-lg ">{state.loading || uploading ? "loading" : 'Submit'}</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Main;