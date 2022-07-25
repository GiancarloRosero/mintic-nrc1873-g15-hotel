import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { RoomComponent } from './room/room.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // Angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
    
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    RoomComponent,
    // Angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
