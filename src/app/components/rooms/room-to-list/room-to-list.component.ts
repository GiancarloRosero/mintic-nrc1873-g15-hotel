import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Tile {
  button: string;
  cols: number;
  rows: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-room-to-list',
  templateUrl: './room-to-list.component.html',
  styleUrls: ['./room-to-list.component.css']
})
export class RoomToListComponent implements OnInit {

  tiles: Tile[] = [
    {title: 'Nombre habitación', description: '', cols: 1, rows: 1, button: '', image: ''},
    {title: 'Imágen habitación', description: '', cols: 3, rows: 3, button: '', image: 'assets/images/home/img1.jpg'},
    {title: 'Descripción habitación', description: 'Descripción habitación', cols: 1, rows: 1, button: '', image: ''},
    {title: 'Ver habitación', description: '', cols: 1, rows: 1, button: 'ruta', image: ''},
  ];

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  viewRoom(): void {
    this.router.navigate(['/rooms/room', 1])
  }

}
