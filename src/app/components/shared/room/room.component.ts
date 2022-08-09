import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { AddComment } from 'src/app/models/add-comment';
import { ImageRoom } from 'src/app/models/image-room';
import { ResponseService, ResponseServiceSingle } from 'src/app/models/response-service';
import { Room } from 'src/app/models/room';
import { UserLoginSucess } from 'src/app/models/user-login-success';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';
import { SnackBarService } from 'src/app/services/snack-bar/snack-bar.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { environment } from 'src/environments/environment';

const INVALID_DATA = [null, undefined, "", "null", "undefined"];

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  bookForm: FormGroup;

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

  dataUser: UserLoginSucess;

  comments: AddComment[] = [];

  constructor(private httpClient: HttpClientService, private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService, private snackBar: SnackBarService, private authService: AuthService,
    private router: Router) {
    this.codeRoomParam = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.bookForm = new FormGroup({
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loadData();
    this.loadDataUser();
  }

  loadData() {
    var spinnerRef = this.spinnerService.start("Cargando detalle de habitación...");
    const map = new Map();
    map.set("roomCode", this.codeRoomParam);
    this.httpClient.get<ResponseService<String>>(ENDPOINTS.loadImagesFromRoom, map).subscribe((result: ResponseService<String>) => {
      if (result.status == 200) {
        result.data.forEach((url) => {
          this.slides.push({
            image: environment.urlBase + "/room/get-image/" + url
          });
        });
      }
    });
    this.httpClient.get<ResponseServiceSingle<Room>>(ENDPOINTS.getRoomDetail, map).subscribe((result: ResponseServiceSingle<Room>) => {
      if (result.status = 200) {
        this.name = result.data.name;
        this.descriptionLarge = result.data.descriptionLarge;
        this.descriptionShort = result.data.descriptionShort;
        this.price = result.data.price;
      }
      this.spinnerService.stop(spinnerRef);
      this.loadComments();
    })
  }

  get imagesRoom(): ImageRoom[] {
    return this.slides;
  }

  loadDataUser(): void {
    if (this.isLogin) {
      this.dataUser = this.authService.isLoginUser();
    }
  }

  get isLogin(): boolean {
    return !INVALID_DATA.includes(String(this.authService.isLoginUser()));
  }

  addComment(): void {
    var spinnerRef = this.spinnerService.start("Agregando comentario...");
    if (!this.isLogin) {
      return;
    }
    const addComment: AddComment = {
      userId: this.dataUser.id,
      roomCode: this.codeRoomParam,
      score: this.commentForm.controls.rating.value,
      comment: this.commentForm.controls.comment.value,
      userFullName: ""
    };

    this.httpClient.post(ENDPOINTS.addComment, addComment).subscribe((result: any) => {
      if (result.status == 200) {
        this.snackBar.openSnackBar("Comentario agregado satisfactorialmente!");
      }
      this.spinnerService.stop(spinnerRef);
    });
  }

  loadComments(): void {
    var spinnerRef = this.spinnerService.start("Cargando comentarios...");
    const map = new Map();
    map.set("roomCode", this.codeRoomParam);
    this.httpClient.get<ResponseService<AddComment>>(ENDPOINTS.getAllCommentsRoom, map).subscribe((result: ResponseService<AddComment>) => {
      if (result.status == 200) {
        this.comments = result.data;
        this.raitingValue = (this.comments.reduce((acc, value) => { return acc + value.score }, 0)) / (this.comments.length)
      }
      this.spinnerService.stop(spinnerRef);
    });
  }

  reserve(): void {
    var spinnerRef = this.spinnerService.start("Intentando reservar...");
    if (!this.bookForm.valid) {
      return;
    }
    const booking = {
      userId: this.dataUser.id,
      roomCode: this.codeRoomParam,
      startDate: this.bookForm.controls.dateStart.value,
      endDate: this.bookForm.controls.dateEnd.value,
    }
    this.httpClient.post(ENDPOINTS.reserveRoom, booking).subscribe((result: any) => {
      if (result.status == 200) {
        this.snackBar.openSnackBar("Habitación reservada exitosamente!");
      } else if (result.status == 406) {
        this.snackBar.openSnackBar("No esta disponible en las fechas seleccionadas!");
      }
      this.spinnerService.stop(spinnerRef);
    })
  }

}
