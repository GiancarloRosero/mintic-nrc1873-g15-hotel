import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  commentForm = new FormGroup({
    comment: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required])
  });
  
  raitingValue: number = 2;

  slides = [
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
    { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
