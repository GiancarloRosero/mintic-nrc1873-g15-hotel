import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  roomForm: FormGroup;

  constructor() {
    this.roomForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      descriptionShort: new FormControl('', [Validators.required]),
      descriptionLarge: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

}
