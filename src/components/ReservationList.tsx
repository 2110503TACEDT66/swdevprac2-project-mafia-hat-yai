'use client'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import  getReservations  from '@/libs/getReservations';
import deleteReservation from '@/libs/deleteReservation';
import LinearProgress from '@mui/material/LinearProgress';
import updateReservation from '@/libs/updateReservation';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import getRestaurants from '@/libs/getRestaurants';
import DateReserve from './DateReserve';
import  Dayjs  from 'dayjs';
import { useRouter } from 'next/navigation';

export default function ReservationList({ userInfo }: { userInfo: any }) {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [allReservations, setAllReservations] = useState<any>(null);

    useEffect(() => {
        if (session) {
            const fetchReservations = async () => {
                const response = await fetch("https://localhost:5000/api/v1/reservations", {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${session.user.token}`
                    }
                })
                if (response.ok) {
                    alert("OK")
                    // const userReservations = response.data.filter((reservation: any) => reservation.user === session.user._id);
                    // setAllReservations(userReservations);
                }
            };
            fetchReservations();
        }
    }, [session]);

    // alert(allReservations);
    
    if (status === 'loading') return <LinearProgress />;

    return (
        <main>
            <div>
                {allReservations ? (
                    <ul>
                        {allReservations.map((reservation: any) => (
                            <li key={reservation._id}>
                                {Dayjs(reservation.reserveDate).format('YYYY-MM-DD HH:mm')} - {reservation.restaurant ? reservation.restaurant.name : 'Unknown Restaurant'}
                            </li>
                        ))}
                    </ul>
                ) : (
                        <p>
                            <p>No reservations found</p>
                        </p>
                )}
            </div>
        </main>
    );
}