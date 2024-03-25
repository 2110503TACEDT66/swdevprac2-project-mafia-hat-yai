import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReservationItemm } from "../../../interfaces";

type CartState = {
    carItems: ReservationItemm[]
}

const initialState:CartState = { carItems: []}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<ReservationItemm>) => {
            state.carItems.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<ReservationItemm>) => {
            const remainItems = state.carItems.filter(obj => {
                return ((obj.carModel !== action.payload.carModel)
                 || (obj.pickupDate !== action.payload.pickupDate)
                 || (obj.returnDate !== action.payload.returnDate));
            })
            state.carItems = remainItems
        }
    }
})

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer
