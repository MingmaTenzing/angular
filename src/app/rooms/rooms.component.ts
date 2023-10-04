import { Component } from '@angular/core';
import { rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  Rooms:rooms  = {
    totalRooms: 20,
    availableRooms: 10, 
    bookedRooms: 5


  }
  

}
