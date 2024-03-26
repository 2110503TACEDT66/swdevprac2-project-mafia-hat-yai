
export default async function deleteReservation(id: string, token: string) {

    const response = await fetch(`https://localhost:5000/api/v1/reservations/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" 
        }
    });
    if (!response.ok) {
        throw new Error("Cannot delete reservation");
    }
    alert("The reservation has been deleted");

    return await response.json();
}