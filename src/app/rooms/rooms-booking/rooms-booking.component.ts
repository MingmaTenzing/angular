import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {
  constructor (private router: ActivatedRoute ) {}

  id!: number;
  
  id$ = this.router.params.pipe(map((param) => param['id']))
  ngOnInit(): void {
      // this.router.params.subscribe((params) => this.id = (params['id']));
  }


}
