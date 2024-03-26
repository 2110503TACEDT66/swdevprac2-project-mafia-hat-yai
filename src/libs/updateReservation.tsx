import { Dayjs } from "dayjs"

export default async function updateReservation(id: string, reserveDate: string) {

    const response = await fetch(`http://localhost:5000/api/v1/api/v1/reservations/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
            reserveDate: reserveDate
        })
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        try {
            const errorJson = JSON.parse(errorMessage);
            if (errorJson.message) {
                alert(errorJson.message);
                throw new Error(errorJson.message);
            } else {
                throw new Error("Unknown error occurred");
            }
        } catch (error) {
            console.error("Error parsing error message:", error);
            throw new Error("Cannot Update reservation");
        }
    }
    return await response.json();
}
