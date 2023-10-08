export interface rooms {
    totalRooms: number,
    availableRooms: number,
    bookedRooms: number
}
export interface hotelInfo {
    hotelName: string,
    
}

export interface RoomList {
    roomNumber:number,
    roomType: string,
    amenities: string,
    price: number,
     photo: string, 
     checkintime: Date,
     checkoutTime: Date,

}