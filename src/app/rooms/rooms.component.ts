import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RoomList, rooms } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements AfterViewInit,OnInit{

  @ViewChild(HeaderComponent) HeaderComponent!: HeaderComponent;

  ngAfterViewInit(): void {
    this.HeaderComponent.title = " I changes the Header Comp Title"
}
 
 
  hotelName: string = 'HYATT HOTEL PERTH';

  showRooms: boolean = false;

  roomList: RoomList[] = [];
  rooms:rooms[] = [];

  ngOnInit(): void {
      
    this.rooms = [
      {
        totalRooms: 20,
        availableRooms: 11,
        bookedRooms: 5,
      },
      {
        totalRooms: 20,
        availableRooms: 10,
        bookedRooms: 5,
      },
      {
        totalRooms: 20,
        availableRooms: 10,
        bookedRooms: 5,
      },
    ];
  
  this.roomList= [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air conditionork',
        price: 200,
        photo:
          'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png',
        checkintime: new Date(),
        checkoutTime: new Date(),
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air conditionork',
        price: 200,
        photo:
          'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png',
        checkintime: new Date(),
        checkoutTime: new Date(),
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe Room',
        amenities: 'Air conditionork',
        price: 200,
        photo:
          'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png',
        checkintime: new Date(),
        checkoutTime: new Date(),
      },
      {
        roomNumber: 4,
        roomType: 'Deluxe Room',
        amenities: 'Air 5g',
        price: 200,
        photo:
          'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png',
        checkintime: new Date(),
        checkoutTime: new Date(),
      },
      {
        roomNumber: 5,
        roomType: 'Deluxe Room',
        amenities: 'Air WIFI',
        price: 1000,
        photo:
          'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png',
        checkintime: new Date(),
        checkoutTime: new Date(),
      },
      {
        roomNumber: 6,
        roomType: 'Private Room',
        amenities: 'Air water',
        price: 300,
        photo:
          'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png',
        checkintime: new Date(),
        checkoutTime: new Date(),
      },
      {
        roomNumber: 7,
        roomType: 'Deluxe Room',
        amenities: 'Air roof',
        price: 600,
        photo:
          'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png',
        checkintime: new Date(),
        checkoutTime: new Date(),
      },
    ];
  }

  toggleBookedRooms() {
    this.showRooms = !this.showRooms;
  }

  selectedRoom!: RoomList;
  getSelectedRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addData() {
    const newData: RoomList = {
      roomNumber: 10,
      roomType: 'Super Deluxe Dobule Deluxe Room',
      amenities: 'Air Proff',
      price: 10000,
      photo:
        'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/02/01073127/Cover-1.png',
      checkintime: new Date(),
      checkoutTime: new Date(),
    };
this.roomList = [...this.roomList, newData]
    console.log(this.roomList);
  }

 
}
