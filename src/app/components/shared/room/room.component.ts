import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { ImageRoom } from 'src/app/models/image-room';
import { ResponseService, ResponseServiceSingle } from 'src/app/models/response-service';
import { Room } from 'src/app/models/room';
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
  
  raitingValue: number = 0;

  slides: ImageRoom[] = [];

  codeRoomParam: string = "";

  name: string = "";
  descriptionLarge: string = "";
  descriptionShort: string = "";
  price: number = 0;

  constructor(private httpClient: HttpClientService, private activatedRoute: ActivatedRoute) {
    this.codeRoomParam = String(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const map = new Map();
    map.set("roomCode", this.codeRoomParam);
    this.httpClient.get<ResponseService<String>>(ENDPOINTS.loadImagesFromRoom, map).subscribe((result:ResponseService<String>) => {
      if(result.status == 200) {
        result.data.forEach((url) => {
          this.slides.push({
            image: environment.urlBase + "/room/get-image/"+url
          });
        });
      }
    });
    this.httpClient.get<ResponseServiceSingle<Room>>(ENDPOINTS.getRoomDetail, map).subscribe((result: ResponseServiceSingle<Room>) => {
      if(result.status = 200) {
        this.name = result.data.name;
        this.raitingValue = Number(result.data.score)
        this.descriptionLarge = result.data.descriptionLarge;
        this.descriptionShort = result.data.descriptionShort;
        this.price = result.data.price;
      }
    })
  }

  get imagesRoom():ImageRoom[] {
    return this.slides;
  }

}
