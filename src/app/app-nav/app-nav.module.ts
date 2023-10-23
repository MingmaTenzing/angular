import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav.component';



@NgModule({
  declarations: [AppNavComponent],
  imports: [
    CommonModule
  ],
  exports:[AppNavModule]
})
export class AppNavModule { }
