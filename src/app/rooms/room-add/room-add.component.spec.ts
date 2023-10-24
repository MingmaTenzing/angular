import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAddComponent } from './room-add.component';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RoomAddComponent', () => {
  let component: RoomAddComponent;
  let fixture: ComponentFixture<RoomAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomAddComponent],
      
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(RoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
