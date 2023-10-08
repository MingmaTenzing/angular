import { Component, Input, Output, EventEmitter,OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnChanges{
ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
}


 @Input() rooms: RoomList[] = [];
 @Output() selectedRoom = new EventEmitter<RoomList>();

 selectRoom(room: RoomList) {
  this.selectedRoom.emit(room)

 }

 
}
