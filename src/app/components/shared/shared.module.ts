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
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { FileUploadServiceService } from 'src/app/services/file-upload-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardHomeComponent } from './card-home/card-home.component';
import { SpinnerViewComponent } from './spinner-view/spinner-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    RoomComponent,
    CommentComponent,
    UploadImagesComponent,
    CardHomeComponent,
    SpinnerViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    // FontAwesome
    FontAwesomeModule,
    //Material carousel
    MatCarouselModule.forRoot(),
    // Angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,

  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    RoomComponent,
    CommentComponent,
    UploadImagesComponent,
    CardHomeComponent,
    SpinnerViewComponent
  ]
})
export class SharedModule { }
