import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { ImageRoom } from 'src/app/models/image-room';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';
import { environment } from 'src/environments/environment';

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

  slides: ImageRoom[] = [];

  constructor(private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const map = new Map();
    map.set("roomId", "123");
    this.httpClient.get<any>(ENDPOINTS.loadImagesFromRoom, map).subscribe((result:any) => {
      if(result.status == 200) {
        result.data.forEach((url: string) => {
          this.slides.push({
            image: environment.urlBase + "/room/get-image/"+url
          });
        })
        
      }
    });
    console.log(this.slides)
  }

  get imagesRoom():ImageRoom[] {
    return this.slides;
  }

}
