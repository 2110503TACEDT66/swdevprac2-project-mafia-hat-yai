"use client"
import updateReservation from '@/libs/updateReservation';
import { useState } from 'react'; // Importing useState from React
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default function ReservationDetail({ initialDate }: { initialDate: string }) {
    // Define state to manage the new reservation date
    const [newDate, setNewDate] = useState(initialDate);

    // Function to handle changes in the input box
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewDate(e.target.value);
    };

    // Function to handle updating reservation
    const handleUpdateReservation = () => {
        try {
            // const response = updateReservation(id, reserveDate);
            // console.log('Reservation updated successfully:', response);
            // You can add further logic here, such as showing a success message to the user
        } catch (error) {
            console.error('Error updating reservation:', error);
            // You can add further error handling logic here, such as showing an error message to the user
        }
    };

    const handleDeleteReservation = () => {
        try {
            // const response = updateReservation(id, reserveDate);
            // console.log('Reservation updated successfully:', response);
            // You can add further logic here, such as showing a success message to the user
        } catch (error) {
            console.error('Error updating reservation:', error);
            // You can add further error handling logic here, such as showing an error message to the user
        }
    };

    // Return the JSX for the component
    return (
        <main className="text-center p-5">
            <div>
                <input
                    type="text"
                    placeholder="New Reservation Date"
                    className="border border-gray-300 rounded-md px-3 py-1 my-3"
                    value={newDate}
                    onChange={handleDateChange}
                />
            </div>
            <br />
            <div className="flex justify-center">
                <button
                    className="block rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white shadow-sm mx-2"
                    onClick={handleUpdateReservation}
                >
                    Update Reservation
                </button>
            </div>
            <br />
            <div className="flex justify-center">
                <button
                    className="block rounded-md bg-red-600 hover:bg-orange-500 px-3 py-1 text-white shadow-sm mx-2"
                    onClick={handleDeleteReservaiton}
                >
                    !! Delete Reservation !!
                </button>
            </div>
        </main>
    );
}