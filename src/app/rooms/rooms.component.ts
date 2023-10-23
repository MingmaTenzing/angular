import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { RoomList, rooms } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements AfterViewInit, OnInit {
  @ViewChild(HeaderComponent) HeaderComponent!: HeaderComponent;

  ngAfterViewInit(): void {
    this.HeaderComponent.title = ' I changes the Header Comp Title';
  }

  subscription!: Subscription;

  hotelName: string = 'HYATT HOTEL PERTH';

  showRooms: boolean = true;

  roomList: RoomList[] | null = [];
  rooms: rooms[] = [];

  rooms$ = this.roomsServce.getRooms$;
  error$ = this.roomsServce.error$;
  constructor(private roomsServce: RoomsService) {}

pirceFilter = new FormControl(0)

  ngOnInit(): void {
    // this.roomsServce.getRooms$.subscribe((rooms) => {
    //   this.roomList = rooms;
    // });
  }

  toggleBookedRooms() {
    this.showRooms = !this.showRooms;
  }

  selectedRoom!: RoomList;
  getSelectedRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addData() {
    const newRoom: RoomList = {
      roomNumber: '10',
      roomType: 'Super Deluxe Dobule Deluxe Room',
      amenities: 'Air Proff',
      price: 10000,
      photos:
        'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png',
      checkinTime: 'added date',
      checkoutTime: 'added date',
      rating: 4,
    };

    this.roomsServce.addRoom(newRoom).subscribe((data) => {
      this.roomList = data;
    });
  }

  updateData() {
    const id: string = '3';
    const updateRoom: RoomList = {
      roomNumber: '40',
      roomType: 'Super Deluxe Dobule Deluxe Room',
      amenities: 'Air Proff',
      price: 10000,
      photos:
        'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png',
      checkinTime: 'added date',
      checkoutTime: 'added date',
      rating: 4,
    };
    this.roomsServce
      .updateRoom(id, updateRoom)
      .subscribe((data) => (this.roomList = data));
  }

  deleteRoom() {
    this.roomsServce.remove('3');
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
