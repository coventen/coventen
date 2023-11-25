
'use client'


import AuthConfig from '@/firebase/oauth.config';
// Import required modules and components
import { useGqlClient } from '@/hooks/UseGqlClient';
import { getEmployerEmail } from '@/shared/getEmployerEmail';
import getNotifications from '@/shared/graphQl/queries/getNotifications';
import { useMutation, useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';

interface Props {
    setNewNotificationCount: any
}


const UPDATE_NOTIFICATION = `
mutation UpdateNotifications($where: NotificationWhere, $update: NotificationUpdateInput) {
    updateNotifications(where: $where, update: $update) {
      notifications {
        id
      }
    }
  }
  `

//component
const CheckPushNotification = () => {

    // states
    const [data, setData] = useState<any>([])
    const { user, authLoading } = AuthConfig()
    const [labEmail, setLabEmail] = useState<string>('')


    //hooks
    const client = useGqlClient()



    //useEffects


    // getting lab data if employee is logged in
    useEffect(() => {
        getLabEmail()
    }, [user?.email]) //eslint-disable-line


    // getting notification data
    useEffect(() => {
        getClinetNotification()
    }, [labEmail]) //eslint-disable-line


    //refreshing notification after 10 minutes
    useEffect(() => {
        const intervalId = setInterval(getClinetNotification, 1200000)
        return () => {
            clearInterval(intervalId);
        };
    }, []);


    // managing notification view
    useEffect(() => {
        if (data?.length) {
            const unViewedNotification = data.filter((item: any) => !item?.isViewed)
            const result = unViewedNotification?.map(async (item: any) => {
                handleNotify(item?.title, item?.description, item?.image);
                await updateNotification(item?.id)

            })
        }

    }, [data?.length]); //eslint-disable-line






    // mutation
    const [updateNotificationFn, updateState] = useMutation(UPDATE_NOTIFICATION, { client })



    const updateNotification = async (id: string) => {
        const { data } = await updateNotificationFn({
            variables: {
                where: {
                    id
                },
                update: {
                    isViewed: true
                }
            }
        })

    }

    // getting lab email if employee is logged in
    const getLabEmail = async () => {
        if (user?.email) {
            const email = await getEmployerEmail(user?.email)
            setLabEmail(email)
        }
    }





    // Access Electron APIs and custom functions exposed by the preload script
    // const electron = (window as any).electron;
    const ipcRenderer = (window as any).ipcRenderer;
    const localDataStorage = (window as any).localDataStorage;







    const getClinetNotification = async () => {
        const variables = {
            "where": {
                // "notificationFor_IN": ["GENERAL"],
                "createdAt_GTE": fiveDaysAgo(),
                "isViewed": false,
                "OR": [
                    {
                        "notificationFor": "VENDOR",
                        "vendorHas": {
                            "userIs": {
                                "email": labEmail || 'no email'
                            }
                        }
                    },
                    {
                        "notificationFor": "GENERAL",
                    },
                ]
            },
            "options": {
                limit: 3,
                "sort": [
                    {
                        "createdAt": "DESC"
                    }
                ]
            }
        };

        const data = await getNotifications(variables)
        setData(data)
    }







    // Handle displaying a notification
    const handleNotify = (title: string, description: string, image: string) => {
        Notification.requestPermission().then((result) => {
            new Notification(title, {
                body: description,
                icon: image,
            });
        });
    };

    // Handle saving notification ID in local storage
    const handleNotificationView = (id: string) => {
        if (!localDataStorage) return;
        const previousData = localDataStorage.getSavedData('viewedNotification');

        const data = {
            key: 'viewedNotification',
            value: previousData ? [...previousData, id] : [id],
        };

        if (ipcRenderer) {
            ipcRenderer.send('save:data', data);
        }
    };





    // Calculate the date that is five days before the current date

    function fiveDaysAgo() {
        const currentDate = new Date();
        const tenDaysAgo = new Date(currentDate);
        tenDaysAgo.setDate(currentDate.getDate() - 5);
        return tenDaysAgo.toISOString();
    }




    //render

    return (
        <div>

        </div>
    );
};

export default CheckPushNotification;