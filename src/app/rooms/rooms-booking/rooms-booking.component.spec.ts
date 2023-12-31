import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsBookingComponent } from './rooms-booking.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RoomsBookingComponent', () => {
  let component: RoomsBookingComponent;
  let fixture: ComponentFixture<RoomsBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsBookingComponent],
      imports:[HttpClientTestingModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(RoomsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
