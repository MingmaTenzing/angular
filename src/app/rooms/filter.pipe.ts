import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from './rooms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms: RoomList[], price: number | null): RoomList[]  {
    return rooms.filter((room) => room.price <= price!);
  }

}
