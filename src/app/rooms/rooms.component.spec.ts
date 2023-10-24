import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsComponent],
     imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
