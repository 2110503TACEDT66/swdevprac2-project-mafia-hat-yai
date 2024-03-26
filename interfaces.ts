export interface ReservationItem {
    carId: string
    carModel: string
    numOfDays: number
    pickupDate: string
    pickupLocation: string
    returnDate: string
    returnLocation: string
}

export interface CarItem {
    id: string
    model: string
    picture: string
}

export interface CarJson {
    count: number
    data: CarItem[]
}

export interface RestaurantItem {
    id: string,
    name: string,
    location: string,
    picture: string,
    open: string,
    close: string,
    averageStar: number,
    totalStars: number,
}

export interface RestaurantJson {
    count: number,
    data: RestaurantItem[]
}

export interface Reservation {
    id: string,
    restaurantid: string
    seats: string
}

export interface ReviewItem {
    id: string,
    restaurantid: string,
    star: number,
    review: string
}

export interface ReviewJson {
    count: number,
    data: ReviewItem[]
}