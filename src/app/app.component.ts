import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'learningAngular';

  name:string = "test"
  game:string = "peace"

  @ViewChild ('user', {read: ViewContainerRef}) vcr!: ViewContainerRef

  ngAfterViewInit(): void {
      const componentRef = this.vcr.createComponent(RoomsComponent)
    componentRef.instance.hotelName = "Mingma Hotel"
  }

  
  
}
