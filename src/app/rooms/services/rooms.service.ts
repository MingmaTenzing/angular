import { Inject, Injectable } from '@angular/core';
import { RoomList, rooms } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoomsListComponent } from '../rooms-list/rooms-list.component';
import { Subject, catchError, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {


  constructor(private http: HttpClient) { 
    
  }

  rooms: rooms[] = [
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

error$ = new Subject<string>();
getRooms$ = this.http.get<RoomList[]>("http://localhost:3000/api/rooms", {
}).pipe(
  catchError((err) =>{
    this.error$.next(err.message);
    return [];
  })
)

  getRooms() {
  
  return this.http.get<RoomList[]>("http://localhost:3000/api/rooms") 
  }

  addRoom(room:RoomList) {
  
    return this.http.post<RoomList[]>('http://localhost:3000/api/rooms', room)
  }

  updateRoom(id:string, updateRoom:RoomList) {
    return this.http.put<RoomList[]>(`http://localhost:3000/api/rooms/${id}`,updateRoom)
  }


  remove(id:string) {
    return this.http.delete<RoomList[]>(`http://localhost:3000/api/rooms/${id}`)
  }
}
