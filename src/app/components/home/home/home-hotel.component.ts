import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';

@Component({
  selector: 'app-home-hotel',
  templateUrl: './home-hotel.component.html',
  styleUrls: ['./home-hotel.component.css']
})
export class HomeComponent implements OnInit {

  bookForm: FormGroup;

  slides = [
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }
  ];

  constructor() {
    this.bookForm = new FormGroup({
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }


}
