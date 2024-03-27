import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material';

export default async function TopMenu() {

    const session = await getServerSession(authOptions);

    return (
        <div className={styles.menucontainer}>
            <Link href="/" underline="none">
                <Image src={'/img/reslo.jpeg'} className={styles.logoimg} alt='logo' width={0} height={0} sizes="100vh" />
            </Link>
            <div className='flex flex-row items-center absolute right-10 h-full px-2 absolute right-0 text-black text-lg font-bold'>
            <TopMenuItem title='Restaurants' pageRef='/restaurant' />
            <TopMenuItem title='Reservation' pageRef='/reservation' />
            <TopMenuItem title='My Reservation' pageRef='/myreservation' />
            <TopMenuItem title='About' pageRef='/about' />
            <TopMenuItem title='User' pageRef='/user' />
            <TopMenuItem title='Register' pageRef='/register' />
                {
                    session ? (
                        <Link href="/api/auth/signout">
                            <div className='flex items-center h-full px-2 text-black text-lg font-bold'>
                                {/* Sign-Out of {session.user?.name} */}
                                Sign-Out
                            </div>
                        </Link>
                    ) : (
                        <Link href="/api/auth/signin">
                            <div className='flex items-center h-full px-2 text-black text-lg font-bold'>
                                Sign-In
                            </div>
                        </Link>
                    )
                }
            
            </div>
        </div >
    );
}