import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  button?: string;
  txtButton?: string;
  cols: number;
  rows: number;
  title?: string;
  description?: string;
  image?: string;
}

@Component({
  selector: 'app-room-to-list',
  templateUrl: './room-to-list.component.html',
  styleUrls: ['./room-to-list.component.css']
})
export class RoomToListComponent implements OnInit {

  tiles: Tile[] = [
    { title: 'Nombre habitación', cols: 1, rows: 1 },
    { cols: 3, rows: 3, image: 'assets/images/home/img1.jpg' },
    { description: 'Descripción habitación', cols: 1, rows: 1 },
    { txtButton: 'Ver habitación', cols: 1, rows: 1, button: 'ruta' },
  ];

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  viewRoom(): void {
    this.router.navigate(['/rooms/room', 1])
  }

}
