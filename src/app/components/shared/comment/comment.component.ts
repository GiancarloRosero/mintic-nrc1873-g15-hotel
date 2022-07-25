import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClickEvent, HoverRatingChangeEvent, RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  raitingValue: number = 2;

  commentsForm = new FormGroup({
    rating: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    this.commentsForm.controls.rating.setValue(4);
  }


}
