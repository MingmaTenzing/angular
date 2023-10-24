import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav.component';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AppNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,

   
  ],
  exports:[AppNavComponent]
})
export class AppNavModule { }
