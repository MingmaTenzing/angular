import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  panelOpenState: boolean = false;
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl(''),
      guestEmail: ['', Validators.required, Validators.email],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
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
      guests: this.fb.array([this.addGuestControl()]),
    });
  }

  addBooking() {
    console.log(this.bookingForm.value);
    this.bookingForm.reset()
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  addGuestControl() {
    return this.fb.group({ guestName: ['', Validators.required], age: new FormControl('') ,});
  }
  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
