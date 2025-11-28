import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';
import { ChoiceComponent } from './choice/choice.component';
import { HomeUfcComponent } from './home-ufc/home-ufc.component';
import { HomeUscComponent } from './home-usc/home-usc.component';
import { ManageUfcBookingsComponent } from './ufcAdminPanel/manage-ufc-bookings/manage-ufc-bookings.component';
import { CreateUfcBookingsComponent } from './ufcAdminPanel/create-ufc-bookings/create-ufc-bookings.component';
import { UfcRealTimeComponent } from './ufcAdminPanel/ufc-real-time/ufc-real-time.component';
import { DataTablesModule } from 'angular-datatables';

import { ToastrModule } from 'ngx-toastr';
import { CdTimerModule } from 'angular-cd-timer';

import { ManageUscBookingsComponent } from './uscAdminPanel/manage-usc-bookings/manage-usc-bookings.component';
import { CreateUscBookingsComponent } from './uscAdminPanel/create-usc-bookings/create-usc-bookings.component';
import { UscRealTimeComponent } from './uscAdminPanel/usc-real-time/usc-real-time.component';
import { ReportsUscComponent } from './uscAdminPanel/reports-usc/reports-usc.component';
import { ReportsUfcComponent } from './ufcAdminPanel/reports-ufc/reports-ufc.component';
import { DayUfcComponent } from './ufcAdminPanel/reports-ufc/day-ufc/day-ufc.component';
import { MonthUfcComponent } from './ufcAdminPanel/reports-ufc/month-ufc/month-ufc.component';
import { FilterUfcComponent } from './ufcAdminPanel/reports-ufc/filter-ufc/filter-ufc.component';
import { DayUscComponent } from './ufcAdminPanel/reports-usc/day-usc/day-usc.component';
import { MonthUscComponent } from './ufcAdminPanel/reports-usc/month-usc/month-usc.component';
import { FilterUscComponent } from './ufcAdminPanel/reports-usc/filter-usc/filter-usc.component';

export function tokenGetter() {
  return localStorage.getItem("jwtoken");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChoiceComponent,
    HomeUfcComponent,
    HomeUscComponent,
    ManageUfcBookingsComponent,
    CreateUfcBookingsComponent,
    UfcRealTimeComponent,
    ManageUscBookingsComponent,
    CreateUscBookingsComponent,
    UscRealTimeComponent,
    ReportsUscComponent,
    ReportsUfcComponent,
    DayUfcComponent,
    MonthUfcComponent,
    FilterUfcComponent,
    DayUscComponent,
    MonthUscComponent,
    FilterUscComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:4200/"]
      },
    }),
    AuthModule.forRoot({
      domain: 'lousy.us.auth0.com',
      clientId: 'BSGqkvkaioLBlyqW3qHVbg2ZzCDrThS2'
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    CdTimerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
