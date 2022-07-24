import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home-hotel.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { MatCarouselModule } from 'ng-mat-carousel';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    //Material carousel
    MatCarouselModule.forRoot(),
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
