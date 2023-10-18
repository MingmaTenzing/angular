import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
 
})
export class BookingComponent implements OnInit{
  panelOpenState:boolean = false;
  bookingForm!: FormGroup;

  constructor( private fb:FormBuilder) {}

  ngOnInit(): void {
      this.bookingForm = this.fb.group({
        roomId:new FormControl(''),
        guestEmail: [''],
        checkinDate:[''],
        checkoutDate:[''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate:[''],
        mobileNumber: [''],
        guestName: [''],
        address: this.fb.group({
          addressline1: [''],
        addressLine2: [''],
        guestCity: [''],
        guestState: [''],
        guestCountry: [''],
        guestZipCode: [''],
        }),
        guestCount: [''],
        guestList: ['']
      })
  }

  addBooking() {
    console.log(this.bookingForm.value)
  }

}
