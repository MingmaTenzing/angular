import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent {
  constructor( private roomsService: RoomsService) {}

  roomSuccess: boolean = false;

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

  addRoom(roomForm: NgForm) {
    this.roomSuccess = false;
    this.roomsService.addRoom(this.room).subscribe((data) => {
      console.log(data)
      this.roomSuccess = true;
      roomForm.reset();
    })
  }
}
