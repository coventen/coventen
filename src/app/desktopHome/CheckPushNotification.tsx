
'use client'


// Import required modules and components
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';

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
    // Access Electron APIs and custom functions exposed by the preload script
    // const electron = (window as any).electron;
    const ipcRenderer = (window as any).ipcRenderer;
    const localDataStorage = (window as any).localDataStorage;

    // Create GraphQL client using custom hook
    const client = useGqlClient();

    // Perform the GraphQL query to fetch notifications
    const { data, loading, error } = useQuery(GET_NOTIFICATION, {
        client,
        variables: {

            "where": {
                "type_IN": ["CLIENT", "GENERAL"],
                "createdAt_GTE": tenDaysAgo()
            },
            "options": {
                limit: 5,
                "sort": [
                    {
                        "createdAt": "DESC"
                    }
                ]
            }

        },
        // revalidateOnMount: 3600 * 3,
        // revalidateOnReconnect: 3600 * 3,
        // revalidateOnFocus: true,
    });




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

        console.log(viewedNotification, 'view notificatoi')

        if (data?.notifications?.length) {
            data?.notifications?.forEach((item: any) => {
                if (viewedNotification?.includes(item?.id)) {
                    return;
                }

                handleNotify(item?.title, item?.description, item?.image);
                handleNotificationView(item?.id);
            });
        }
    }, [data?.notifications?.length]); //eslint-disable-line



    // Calculate the date that is five days before the current date

    function tenDaysAgo() {
        const currentDate = new Date();
        const tenDaysAgo = new Date(currentDate);
        tenDaysAgo.setDate(currentDate.getDate() - 10);
        return tenDaysAgo.toISOString();
    }




    //render

    return (
        <div>

        </div>
    );
};

export default CheckPushNotification;