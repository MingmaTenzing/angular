import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
 
})
export class BookingComponent implements OnInit{
  panelOpenState:boolean = false;
  bookingForm!: FormGroup;


  constructor( private fb:FormBuilder) {}

  get guests() {
    return this.bookingForm.get('guests') as FormArray;

  }

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
       
        address: this.fb.group({
          addressline1: [''],
        addressLine2: [''],
        guestCity: [''],
        guestState: [''],
        guestCountry: [''],
        guestZipCode: [''],
        }),
        guestCount: [''],
        guests: this.fb.array([ 
          this.fb.group({ guestName: [''], age: new FormControl("")})
        ])
      })
  }

  addBooking() {
    console.log(this.bookingForm.value)
  }

  addGuest() {
    this.guests.push(this.fb.group({guestName:[''], age: new FormControl("")}))
   

  }

}
