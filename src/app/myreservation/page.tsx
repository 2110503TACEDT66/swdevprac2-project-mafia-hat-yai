"use client"
import ReservationList from '@/components/ReservationList';
import LinearProgress from '@mui/material/LinearProgress';
import { getServerSession } from 'next-auth/next';
import { Suspense } from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';


export default async function myreservation() {
    const session = await getServerSession(authOptions);
    let userInfo = null;
    if (session) {
        userInfo = await getUserProfile(session.user.token);
    }

    return (
        <main>
            <ReservationList userInfo={userInfo}></ReservationList>
            {/* <ReservationList></ReservationList> */}
        </main>
    );
}