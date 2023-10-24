import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { logingaurdGuard } from './gaurd/logingaurd.guard';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate:[logingaurdGuard] },
  { path: 'search', component: SearchComponent },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then((m) => m.RoomsModule), canActivate:[logingaurdGuard], canMatch:[logingaurdGuard]
  },

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'comments', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
