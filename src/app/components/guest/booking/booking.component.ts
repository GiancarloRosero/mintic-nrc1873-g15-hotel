import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookForm: FormGroup;

  constructor() {
    this.bookForm = new FormGroup({
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  reserve(): void {
    console.log(this.bookForm.controls.dateStart.value)
    console.log(this.bookForm.controls.dateEnd.value)
  }

}
