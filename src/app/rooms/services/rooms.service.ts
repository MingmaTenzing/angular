import { Inject, Injectable } from '@angular/core';
import { RoomList, rooms } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { RoomsListComponent } from '../rooms-list/rooms-list.component';
import { Subject, catchError, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {


  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, private http: HttpClient) { 
    
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

getRooms$ = this.http.get<RoomList[]>("/api/rooms").pipe(
  catchError((err) =>{
    this.error$.next(err.message);
    return [];
  })
)

  getRooms() {
  return this.http.get<RoomList[]>("/api/rooms") 
  }

  addRoom(room:RoomList) {
  
    return this.http.post<RoomList[]>('/api/rooms', room)
  }

  updateRoom(id:string, updateRoom:RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${id}`,updateRoom)
  }


  remove(id:string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
  }
}
