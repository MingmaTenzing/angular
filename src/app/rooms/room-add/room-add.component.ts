import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent {
  constructor( private roomsService: RoomsService) {}

  room: RoomList = {
    roomNumber:"",
    roomType: "",
    amenities: "",
    price: 0,
     photos: "",
     checkinTime: new Date().toString(),
     checkoutTime: new Date().toString(),
     rating: 0


  }

  addRoom() {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      console.log(data)
    })
  }
}
