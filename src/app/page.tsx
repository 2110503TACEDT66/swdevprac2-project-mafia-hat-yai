import Image from 'next/image'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
import styles from './page.module.css'
import CarPanel from '@/components/CarPanel'
import { TravelCard } from '@/components/TravelCard'
import Add from '@/components/Add'
import Add2 from '@/components/Add2'

export default function Home() {
  return (
    <main>
      <Banner />
      <Add/>
      <div className='text-center text-4xl font-bold'>
        TOP RESTAURANT IN THIS WEEK
      </div>
      <Add2/>
      <div className='text-center text-lg font-bold m-5'>
        Contact Us
      </div>
      <div className='text-center text-sm m-5'>
        Facebook : Restaurant Reservation | IG : resreserve
      </div>
    </main>
  )
}
