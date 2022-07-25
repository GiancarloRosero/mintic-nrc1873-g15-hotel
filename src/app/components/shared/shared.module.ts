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
import { MatCarouselModule } from 'ng-mat-carousel';
import { CommentComponent } from './comment/comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    RoomComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    //Material carousel
    MatCarouselModule.forRoot(),
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
    CommentComponent,
  ]
})
export class SharedModule { }
