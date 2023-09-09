
'use client'


// Import required modules and components
import { useGqlClient } from '@/hooks/UseGqlClient';
import getNotifications from '@/shared/graphQl/queries/getNotifications';
import { useQuery } from 'graphql-hooks';
import React, { useEffect, useState } from 'react';

interface Props {
    setSlideOverOpen: (value: boolean) => void;
}


// GraphQL query to fetch notifications
const GET_NOTIFICATION = `
query Notifications($where: NotificationWhere, $options: NotificationOptions) {
    notifications(where: $where, options: $options) {
      id
      image
      title
      type
      description
      createdAt
    }
  }
`;


//component
const CheckPushNotification = () => {

    const [data, setData] = useState<any>([])



    // Access Electron APIs and custom functions exposed by the preload script
    // const electron = (window as any).electron;
    const ipcRenderer = (window as any).ipcRenderer;
    const localDataStorage = (window as any).localDataStorage;




    useEffect(() => {
        getClinetNotification()
    }, [])


    const getClinetNotification = async () => {
        const variables = {

            "where": {
                "type_IN": ["CLIENT", "GENERAL"],
                "createdAt_GTE": fiveDaysAgo()
            },
            "options": {
                limit: 5,
                "sort": [
                    {
                        "createdAt": "DESC"
                    }
                ]
            }
        }

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

    useEffect(() => {
        if (!localDataStorage) return;
        // Retrieve viewed notification IDs from local storage
        const viewedNotification = localDataStorage.getSavedData('viewedNotification');
        if (data?.length) {
            data?.forEach((item: any) => {
                if (viewedNotification?.includes(item?.id)) {
                    return;
                }

                handleNotify(item?.title, item?.description, item?.image);
                handleNotificationView(item?.id);
            });
        }
    }, [data?.length]); //eslint-disable-line



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