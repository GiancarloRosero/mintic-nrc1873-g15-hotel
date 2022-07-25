import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

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
