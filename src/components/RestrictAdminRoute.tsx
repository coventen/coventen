import AuthConfig from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useManualQuery, useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import UnAuthorized from './UnAuthorized';
import Loading from '@/app/loading';
import { NavItem } from '@/app/admin/NavItem';

interface IRestrictAdminRouteProps {
    children: any;
    accessibleNavItems: any;
    navItems?: any;
    setAccessibleNavItems: (accessibleNavItems: any) => void;
}


const GET_USER = `
query Users($where: UserWhere) {
    users(where: $where){
      user_type
      hasRole {
        permissions
      }
    }
  }`


const RestrictAdminRoute = ({ children, accessibleNavItems, setAccessibleNavItems, navItems }: IRestrictAdminRouteProps) => {

    // states
    const [data, setData] = React.useState<any>(null)
    const [loading, setLoading] = React.useState<boolean>(true)

    // HOOKS
    const client = useGqlClient()
    const { user, authLoading } = AuthConfig();
    const userEmail = user?.email

    const [getUserFn, getUserState] = useManualQuery(GET_USER, { client })


    useEffect(() => {
        getUserData()
        checkUserType()
        setAccessibleNavItems(navItems)

    }, [userEmail, data?.users?.length, authLoading])




    // checking user type

    const checkUserType = () => {
        setLoading(true)
        if (data?.users?.length) {

            if (data?.users[0]?.user_type === "ADMIN") {
                setLoading(false)
                return children
            }
            else if (data?.users[0]?.user_type === "COVENTEN_EMPLOYEE") {
                getAccessibleNavItems()
            }

            else if (data?.users[0]?.user_type != "ADMIN" || data?.users[0]?.user_type != "COVENTEN_EMPLOYEE") {
                setLoading(false)
                return <UnAuthorized />
            }
        } else {
            setLoading(false)
            return <UnAuthorized />
        }
    }

    const getAccessibleNavItems = () => {
        if (data?.users[0]?.user_type === "COVENTEN_EMPLOYEE" && data?.users[0]?.hasRole?.permissions?.length) {
            setLoading(true)
            const permissions = data?.users[0]?.hasRole?.permissions
            // filtering nav items
            const filteredNavItems = navItems?.filter((navItem: any) => {
                return permissions.includes(navItem.label.toLowerCase());
            });
            setAccessibleNavItems(filteredNavItems)
            setLoading(false)

        }
        else {
            setLoading(false)
            setAccessibleNavItems([])
            return <UnAuthorized />
        }
    }

    const getUserData = async () => {
        const { data } = await getUserFn({
            variables: {
                where: {
                    email: user?.email || 'no email'
                }
            }
        })

        if (data?.users?.length) {
            setData(data)
        }
    }


    if (getUserState.loading || loading || authLoading) return <Loading />




    return (
        <>
            {
                accessibleNavItems.length ? children : <UnAuthorized />
            }
        </>
    );
};

export default RestrictAdminRoute;