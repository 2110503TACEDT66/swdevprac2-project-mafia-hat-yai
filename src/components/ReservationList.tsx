import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import getReservations from '@/libs/getReservations';

export default function ReservationList({ userInfo }: { userInfo: any }) {
    const { data: session, status } = useSession();
    const [allReservations, setAllReservations] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
                try {
                    const reservations = await getReservations(session.user.token);
                    setAllReservations(reservations);
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, [session]);

    if (status === 'loading' || loading) return <LinearProgress />;

    return (
        <main>
            <div>
                {allReservations ? (
                    <ul>
                        {allReservations.map((reservation: any) => (
                            <li key={reservation._id}>
                                {reservation.date} - {reservation.restaurant ? reservation.restaurant.name : 'Unknown Restaurant'}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No reservations found</p>
                )}
            </div>
        </main>
    );
}
