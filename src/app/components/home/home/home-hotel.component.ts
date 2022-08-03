import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-hotel',
  templateUrl: './home-hotel.component.html',
  styleUrls: ['./home-hotel.component.css']
})
export class HomeComponent implements OnInit {

  bookForm: FormGroup;

  slides = [
    { 'image': '../../../../assets/images/home/imgHome1.jpg' },
    { 'image': '../../../../assets/images/home/imgHome2.jpg' },
    { 'image': '../../../../assets/images/home/imgHome3.jpg' },
    { 'image': '../../../../assets/images/home/imgHome4.jpg' },
    { 'image': '../../../../assets/images/home/imgHome5.jpg' }
  ];

  constructor() {
    this.bookForm = new FormGroup({
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
      guestNumber: new FormControl('', [Validators.required, Validators.min(0), Validators.max(6)])
    })
  }

  ngOnInit(): void {
  }

  public searchRooms(): void {

  }

  public searchRoomsIsValid(): boolean {
    return this.bookForm.invalid;
  }


}
