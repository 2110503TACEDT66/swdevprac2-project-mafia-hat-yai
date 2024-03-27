// import RemoveButton from "./RomoveButton"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Link from "next/link"
import { Reservation, ReservationJson } from "../../interfaces"
import updateReservation from "@/libs/updateReservation"

export default async function ReservationList({ reservationJson, userId, userRole}: { reservationJson: Promise<ReservationJson>, userId: string, userRole: string}) {
    const session = await getServerSession(authOptions)
    const reservationReady = await reservationJson
    //console.log(session?.user.token)
    // console.log(reservationReady);

    const token = session?.user.token
    if (!token) return

    return (
        <>
            <div style={{
                paddingBottom: "150px", margin: "10px", display: "flex", flexDirection: "column",flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"
            }}>
                {
                    reservationReady.data.map((reservationItem: Reservation) => (
                        <div className="bg-slate-200 rounded px-5 mx-5 py-3 my-2 w-4/5 text-center" key={reservationItem._id}>
                            {/* <div className="text-sm font-semibold">Reservation ID: {reservationItem._id}</div> */}
                            <div className="text-lg font-semibold">{reservationItem.restaurant?.name}</div>
                            <div className="text-lg font-semibold">Date: {new Date(reservationItem.reserveDate).toLocaleString()}</div>
                            <div className="text-sm font-semibold">({reservationItem.reserveDate})</div>
                            <br />
                            {
                                userRole === 'admin' ?
                                    <div>
                                        <div className="text-sm font-semibold">User: {reservationItem.user}</div>
                                        <div className="text-sm font-semibold">Reservation ID : {reservationItem._id}
                                        </div>
                                    </div>
                                    : null
                            }
                            <div>
                                <br />
                                <Link href={`/myreservation/${reservationItem._id}`}>
                                    <button
                                        className="rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white shadow-sm"
                                    >
                                        Edit Reservation
                                    </button>
                                </Link>
                                {/* <div className="my-1">
                                    <button
                                        className="block rounded-md bg-red-600 hover:bg-red-700 px-3 py-1 text-white shadow-sm"
                                    // onClick={() => handleDelete(reservationItem._id)}
                                    >
                                        Delete Reservation
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}