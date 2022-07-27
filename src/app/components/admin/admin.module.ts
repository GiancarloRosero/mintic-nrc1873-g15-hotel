import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoomComponent } from './add-room/add-room.component';
import { AdminRoutingModule } from './admin-routing.module';
import { GuestsComponent } from './guests/guests.component';



@NgModule({
  declarations: [
    AddRoomComponent,
    GuestsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
