import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
// import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { AppNavModule } from './app-nav/app-nav.module';
import { BookingModule } from './booking/booking.module';
import { LoginModule } from './login/login.module';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    NotfoundComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    BookingModule,
    LoginModule,
    AppNavModule,
    HeaderModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    RouterTestingModule,
    
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
