import { currentUser } from '@/firebase/oauth.config';
import { useGqlClient } from '@/hooks/UseGqlClient';
import { useQuery } from 'graphql-hooks';
import React, { useEffect } from 'react';
import UnAuthorized from './UnAuthorized';
import Loading from '@/app/loading';
import { NavItem } from '@/app/admin/NavItem';

interface IRestrictAdminRouteProps {
    children: any;
    accessibleNavItems: NavItem[];
    navItems?: NavItem[];
    setAccessibleNavItems: (accessibleNavItems: NavItem) => void;
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


const RestrictAdminRoute = ({ children, accessibleNavItems, setAccessibleNavItems }: IRestrictAdminRouteProps) => {


    // HOOKS
    const client = useGqlClient()
    const user = currentUser();

    const { data, loading, error } = useQuery(GET_USER, {
        client,
        variables: {
            where: {
                email: user?.email || 'no email'
            }
        }
    })


    if (loading) return <Loading />

    // if (data?.users[0]?.user_type !== "ADMIN" || data?.users[0]?.user_type !== "COVENTEN_EMPLOYEE") {
    //     return <UnAuthorized />
    // }

    // if (data?.users[0]?.user_type === "COVENTEN_EMPLOYEE") {
    //     const permissions = data?.users[0]?.hasRole?.permissions
    //     const matchedItems = findMatchingItems(permissions, accessibleNavItems)
    //     setAccessibleNavItems(matchedItems)

    // }

    // function findMatchingItems(array1: any[], array2: any[]) {
    //     const set2 = new Set(array2);
    //     return array1.filter(item => set2.has(item));

    // }

    return (
        <div>

        </div>
    );
};

export default RestrictAdminRoute;