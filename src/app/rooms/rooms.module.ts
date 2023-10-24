import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { FilterPipe } from './filter.pipe';
import {  MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomAddComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HeaderModule,
  ],
  
})
export class RoomsModule { }
