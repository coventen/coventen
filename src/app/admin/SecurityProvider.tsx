import { useAuth } from '@/firebase/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const SecurityProvider = () => {


    const { user, authLoading }: any = useAuth()
    const router = useRouter()


    // useEffect(() => {

    //     if (user.user_type !== "ADMIN" || user.user_type !== "COVENTEN_EMPLOYEE") {
    //         router.replace('/not_authorized')
    //     }
    //     if (user.user_type === "COVENTEN_EMPLOYEE") {
    //         router.replace('/admin/dashboard')
    //     }

    // }, [user, authLoading])






};

export default SecurityProvider;