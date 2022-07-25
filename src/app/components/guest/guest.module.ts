import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { HistoricalComponent } from './historical/historical.component';



@NgModule({
  declarations: [
    BookingComponent,
    HistoricalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GuestModule { }
