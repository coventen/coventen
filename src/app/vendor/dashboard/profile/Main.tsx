'use client'
import Loading from '@/app/loading';
import Button from '@/components/Button';
import Error from '@/components/Error';
import AuthConfig from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import Industries from './Industries';
import Services from './Services';
import Documents from './Documents';
import toast from 'react-hot-toast';
import Tabs from './(components)/Tabs';

const GET_USER = `query Query($where: UserWhere) {
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
      companyDescription
      interest
      user_type
      hasDocuments {
        hasFiles {
          links
        }
      }
      hasPrimaryaddress {
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
      isVendor {
        id
        industry
        service
        equipmentDocs
        hasManyEquipment {
          id
          name
          model
          make
          yearOfInstallation
          calibrationDetails
          warranty
        }
      }
    }
  }`

const UPDATE_USER = `mutation UpdateUsers($where: UserWhere, $update: UserUpdateInput) {
  updateUsers(where: $where, update: $update) {
    info {
      nodesCreated
      nodesDeleted
    }
  }
}`

const Main = () => {

  //states
  const [previousData, setPreviousData] = React.useState<any>(null)
  const [userInfo, setUserInfo] = React.useState<any>({
    name: '',
    email: '',
    phone: '',
    title: '',
    department: '',
    education: '',
    experience: '',
    specialty: '',
    interest: '',
    // reportingTo: '',
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
    Zip: '',
    otherStreet: '',
    otherCity: '',
    userType: '',
    otherState: '',
    otherCountry: '',
    otherZip: '',
    documents: [],
    equipments: [],
    service: [],
    industries: [],
    equipmentAttachments: [],
  })


  //hooks
  const client = useGqlClient()
  const { user, authLoading } = AuthConfig()





  // fetching data
  const [getUserFn, userState] = useManualQuery(GET_USER, {
    client,
  })

  // updating the user node
  const [updateUserFn, updateUserState] = useMutation(UPDATE_USER, { client })




  // setting the user data  to the state
  useEffect(() => {
    if (previousData) {
      const { isVendor, hasSecondaryaddress, hasPrimaryaddress, hasDocuments, user_type, interest, companyDescription, specialty, experience, skypeId, twitter, linkedin, companyPhone, department, education, title, gstNumber, companyEmail, reportingTo, companyName, phoneNumber, panCardNo, bio, phone, email, name } = previousData



      const primaryStreet = hasSecondaryaddress?.street || ''
      const primaryCity = hasSecondaryaddress?.city || ''
      const primaryState = hasSecondaryaddress?.state || ''
      const primaryCountry = hasSecondaryaddress?.Country || ''
      const primaryZip = hasSecondaryaddress?.zipCode || ''

      const secondaryStreet = hasPrimaryaddress?.street || ''
      const secondaryCity = hasPrimaryaddress?.city || ''
      const secondaryState = hasPrimaryaddress?.state || ''
      const secondaryCountry = hasPrimaryaddress?.Country || ''
      const secondaryZip = hasPrimaryaddress?.zipCode || ''

      const service = isVendor?.service || []
      const industries = isVendor?.industry || []
      const equipments = isVendor?.hasManyEquipment || []
      const equipmentAttachments = isVendor?.equipmentDocs || []

      const documents = hasDocuments?.hasFiles?.links || []

      setUserInfo({
        name,
        email,
        phone,
        title,
        department,
        education,
        experience,
        specialty,
        interest,
        // reportingTo,
        bio,
        companyName,
        companyEmail,
        aboutCompany: companyDescription,
        companyPhone,
        panCardNo,
        gst: gstNumber,
        otherPhone: phoneNumber,
        linkedin,
        twitter,
        skypeId,
        street: primaryStreet,
        city: primaryCity,
        state: primaryState,
        country: primaryCountry,
        zip: primaryZip,
        otherStreet: secondaryStreet,
        otherCity: secondaryCity,
        userType: user_type,
        otherState: secondaryState,
        otherCountry: secondaryCountry,
        otherZip: secondaryZip,
        documents,
        equipments,
        service,
        industries,
        equipmentAttachments,

      })
    }
  }, [previousData])




  useEffect(() => {
    if (user?.email) {
      getUser()
    }
  }, [user?.email, authLoading])



  // get user 
  const getUser = async () => {
    const { data } = await getUserFn({
      variables: { where: { email: user?.email || 'no user' } }
    })
    if (data?.users[0]?.name) {
      setPreviousData(data?.users[0])
    }
  }




  // updating the user node

  const updateUser = async () => {

    const { name, email, phone, title, department, education, experience, specialty, interest, bio, companyName, companyEmail, aboutCompany, companyPhone, panCardNo, gst, otherPhone, linkedin, twitter, skypeId, equipmentAttachments, industries, service, equipments, documents, otherZip, otherCountry, otherState, otherCity, otherStreet, Zip, country, state, city, street } = userInfo

    const { data, error } = await updateUserFn({
      variables: {
        "where": {
          "email": user?.email
        },
        "update": {
          "name": name,
          "email": email,
          "phone": phone,
          "bio": bio,
          "panCardNo": panCardNo,
          "phoneNumber": otherPhone,
          "companyName": companyName,
          "companyEmail": companyEmail,
          "gstNumber": gst,
          "title": title,
          "education": education,
          "department": department,
          "companyPhone": companyPhone,
          "linkedin": linkedin,
          "twitter": twitter,
          "skypeId": skypeId,
          "experience": experience,
          "specialty": specialty,
          "interest": interest,
          "companyDescription": aboutCompany,
          "isVendor": {
            "update": {
              "node": {
                // "industry": industries,
                // "service": service,
                // "equipmentDocs": equipmentAttachments,
                "hasManyEquipment": equipments.map((equipment: any) => {
                  return {
                    "update": {
                      "node": {
                        "name": equipment.name,
                        "model": equipment.model,
                        "make": equipment?.make,
                        "yearOfInstallation": equipment?.yearOfInstallation,
                        "calibrationDetails": equipment?.calibrationDetails,
                        "warranty": equipment?.warranty,
                      }
                    }
                  }
                }),



              }
            }
          },
          "hasPrimaryaddress": {
            "update": {
              "node": {
                "street": city,
                "city": city,
                "state": state,
                "Country": country,
                "zipCode": Zip
              }
            }
          },
          "hasSecondaryaddress": {
            "update": {
              "node": {
                "street": otherState,
                "city": otherCity,
                "state": otherState,
                "Country": otherCountry,
                "zipCode": otherZip
              }
            }
          }
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





  if (updateUserState.loading || authLoading || userState.loading) return <div><Loading /></div>

  if (userState.error || updateUserState.error) return <Error />

  return (
    <div className='bg-white p-4'>

      <Tabs userInfo={userInfo} setUserInfo={setUserInfo} updateUser={updateUser} />

    </div>
  );
};

export default Main;