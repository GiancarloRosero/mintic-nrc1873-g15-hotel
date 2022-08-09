import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { ResponseService } from 'src/app/models/response-service';
import { Room } from 'src/app/models/room';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  bookForm: FormGroup;

  listRoom: Room[] = [];

  constructor(private httpClient: HttpClientService, private spinnerService: SpinnerService) {
    this.bookForm = new FormGroup({
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    var spinnerRef = this.spinnerService.start("Cargando listado de habitaciones...");
    this.httpClient.get<ResponseService<Room>>(ENDPOINTS.getAllRooms).subscribe((result: ResponseService<Room>) => {
      if (result.status == 200) {
        this.listRoom = result.data;
      }
      this.spinnerService.stop(spinnerRef);
    });
  }

  public searchRooms(): void {

  }

  public searchRoomsIsValid(): boolean {
    return this.bookForm.invalid;
  }

}
