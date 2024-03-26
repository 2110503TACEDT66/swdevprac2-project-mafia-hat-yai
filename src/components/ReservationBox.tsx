"use client"
import DateReserve from '@/components/DateReserve';
import { useEffect, useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import getRestaurants from '@/libs/getRestaurants';
import addReservation from '@/libs/addReservation';
import { getSession, useSession } from 'next-auth/react';
import ReservationReserve from './ReservationReserve';

export default function ReservationBox({profile}:{profile:any}) {

  const [rp, setRp] = useState<any>(null);
  useEffect(() => {
    const getrest = async () => {const Restaurants = await getRestaurants();setRp(Restaurants);};getrest();},[]);

  const [dateReserve, setDateReserve] = useState(null);
  const [restaurant, setRestaurant] = useState('');
  const {data:session, status} = useSession()

  const makeReservation = async () => {
    
    if (dateReserve && restaurant && profile) {
      try {
        if(session) {
          // alert(restaurant) // restID
          // alert(session.user.token) // user token
          // alert(dateReserve) // date
          // alert(profile.data._id) // user id
          const response = await fetch(`http://localhost:5000/api/v1/restaurants/${restaurant}/reservations`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${session.user.token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              reserveDate: dateReserve,
              user: profile.data._id
            })
          });
          if (response.ok) {
            // alert("OK")
          }
        } 
        // console.log("Booking dispatched successfully.");
      } catch (error) {
        console.log("ERROR");
      }
    } else {
      console.log("Please fill the form");
    }
  };

  return (
    <main className="flex flex-col items-center pt-6 pl-6 w-full">
      <br />
      <br />
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 space-y-4 mt-4">
          <div>
            <label className="block text-sm font-4xl text-gray-700">
              Choose restaurant to reserve !!
            </label>
            <div className="mt-2">
              <Select
                variant="standard"
                name="restaurant"
                id="restaurant"
                className="h-[full] w-[320px]"
                value={restaurant}
                onChange={(e)=>{setRestaurant(e.target.value);
                }}>
                {rp?.data.map((RestaurantItem:any)=>(
                <MenuItem value={RestaurantItem._id}>{RestaurantItem.name}</MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reserve your date
            </label>
            <div className="mt-2 ">
              <ReservationReserve onDateChange={(value: any) => { setDateReserve(value) }} />
            </div>
          </div>
          <div>
            <button
              type='button'
              className="w-full bg-sky-600 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-400"
              onClick={makeReservation} name='Reserve'>
              Reserve My Seat now!!!
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}