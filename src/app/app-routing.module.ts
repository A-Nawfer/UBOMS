import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ChoiceComponent } from './choice/choice.component';
import { HomeUfcComponent } from './home-ufc/home-ufc.component';
import { HomeUscComponent } from './home-usc/home-usc.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateUfcBookingsComponent } from './ufcAdminPanel/create-ufc-bookings/create-ufc-bookings.component';
import { ManageUfcBookingsComponent } from './ufcAdminPanel/manage-ufc-bookings/manage-ufc-bookings.component';
import { DayUfcComponent } from './ufcAdminPanel/reports-ufc/day-ufc/day-ufc.component';
import { FilterUfcComponent } from './ufcAdminPanel/reports-ufc/filter-ufc/filter-ufc.component';
import { MonthUfcComponent } from './ufcAdminPanel/reports-ufc/month-ufc/month-ufc.component';
import { ReportsUfcComponent } from './ufcAdminPanel/reports-ufc/reports-ufc.component';
import { DayUscComponent } from './ufcAdminPanel/reports-usc/day-usc/day-usc.component';
import { FilterUscComponent } from './ufcAdminPanel/reports-usc/filter-usc/filter-usc.component';
import { MonthUscComponent } from './ufcAdminPanel/reports-usc/month-usc/month-usc.component';
import { UfcRealTimeComponent } from './ufcAdminPanel/ufc-real-time/ufc-real-time.component';
import { CreateUscBookingsComponent } from './uscAdminPanel/create-usc-bookings/create-usc-bookings.component';
import { ManageUscBookingsComponent } from './uscAdminPanel/manage-usc-bookings/manage-usc-bookings.component';
import { ReportsUscComponent } from './uscAdminPanel/reports-usc/reports-usc.component';
import { UscRealTimeComponent } from './uscAdminPanel/usc-real-time/usc-real-time.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'home-ufc',
    component: HomeUfcComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home-usc',
    component: HomeUscComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'choice',
    component: ChoiceComponent,
    canActivate: [AuthGuard],
   },
   {
    path: 'manage-ufc',
    component: ManageUfcBookingsComponent,
    canActivate: [AuthGuard],
   },
   {
    path: 'create-ufc',
    component: CreateUfcBookingsComponent,
    canActivate: [AuthGuard],
   },
   {
    path: 'ufc-real-time',
    component: UfcRealTimeComponent
   },
   {
    path: 'reports-ufc',
    component: ReportsUfcComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'day-ufc',
        component: DayUfcComponent,
      },
      {
        path: 'month-ufc',
        component: MonthUfcComponent,
      },
      {
        path: 'filter-ufc',
        component: FilterUfcComponent
      },
      {
        path: '',
        component: DayUfcComponent
      }
    ]
   },
   {
    path: 'manage-usc',
    component: ManageUscBookingsComponent,
    canActivate: [AuthGuard],
   },
   {
    path: 'create-usc',
    component: CreateUscBookingsComponent,
    canActivate: [AuthGuard],
   },
   {
    path: 'usc-real-time',
    component: UscRealTimeComponent
   },
   {
    path: 'reports-usc',
    component: ReportsUscComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'day-usc',
        component: DayUscComponent,
      },
      {
        path: 'month-usc',
        component: MonthUscComponent,
      },
      {
        path: 'filter-usc',
        component: FilterUscComponent
      },
      {
        path: '',
        component: DayUscComponent
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
