import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'learningAngular';

  name: string = 'test';
  game: string = 'peace';

  constructor(private router: Router) {}

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;


  ngOnInit(): void {
    this.router.events.subscribe((event) => console.log(event));
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => console.log('Navigation Started'));
  
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => console.log('Navigation Ended'));
  
  
    }
}
