// import RemoveButton from "./RomoveButton"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Link from "next/link"
import { Reservation, ReservationJson } from "../../interfaces"
import updateReservation from "@/libs/updateReservation"

export default async function ReservationList({ reservationJson }: { reservationJson: Promise<ReservationJson> }) {
    const session = await getServerSession(authOptions)
    const reservationReady = await reservationJson
    //console.log(session?.user.token)
    // console.log(reservationReady);

    const token = session?.user.token
    if (!token) return
    
    // const handleEdit = async (reservationId : string) => {
    //     try {
    //         // Call the updateReservation function with the reservation ID, token, and new date
    //         const updatedReservation = await updateReservation(reservationId, token, newDate);
    //         // Handle any UI updates or state changes after successful reservation update
    //         console.log('Reservation updated successfully:', updatedReservation);
    //     } catch (error) {
    //         // Handle errors, such as displaying an error message to the user
    //         console.error('Error updating reservation:', error);
    //         // Optionally, you can display an error message to the user
    //     }
    // };


    return (
        <>
            <div style={{
                paddingBottom: "150px", margin: "10px", display: "flex", flexDirection: "column",
                flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"
            }}>
                {
                    reservationReady.data.map((reservationItem: Reservation) => (
                        <div className="bg-slate-200 rounded px-5 mx-5 py-3 my-2 w-4/5" key={reservationItem._id}>
                            <div className="text-sm font-semibold">Reservation ID: {reservationItem._id}</div>
                            <div className="text-sm font-semibold">Reservation Date: {reservationItem.reserveDate}</div>
                            <div className="text-sm font-semibold">User: {reservationItem.user}</div>
                            <div>
                                <Link href={`/myreservation/${reservationItem._id}`}>
                                    <button
                                        className="rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white shadow-sm"
                                    >
                                        Edit Reservation
                                    </button>
                                </Link>
                                <div className="my-1">
                                    <button
                                        className="block rounded-md bg-red-600 hover:bg-red-700 px-3 py-1 text-white shadow-sm"
                                        // onClick={() => handleDelete(reservationItem._id)}
                                    >
                                        Delete Reservation
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}