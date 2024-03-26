import getCars from "@/libs/getCars";
import CarCatalog from "@/components/CarCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CarPanel from "@/components/CarPanel";
import { CarJson, RestaurantJson } from "../../../../interfaces";

export default async function Car() {
    const cars: RestaurantJson = await getCars()
    
    // console.log(cars);
    console.log("Fetched Cars");

    return (
        <main className="text-center p-5" >
            <h1 className='text-xl font-medium'>Select Your Travel Partner</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <CarCatalog restaurantJson={cars}/>
            </Suspense>
            <hr className="my-10" />
            <h1 className="text-xl font-medium">Restaurant - Panel</h1>
        </main>
    )
}