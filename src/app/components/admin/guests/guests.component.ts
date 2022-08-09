import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { ResponseService } from 'src/app/models/response-service';
import { UserList } from 'src/app/models/user-list';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  constructor(private httpClient: HttpClientService) { }

  columnas: string[] = ['id', 'document', 'fullName', 'email', 'role', 'borrar', 'editar'];

  datos: Guest[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.httpClient.get<ResponseService<UserList>>(ENDPOINTS.getAllUsers).subscribe((result: ResponseService<UserList>) => {
      if (result.status == 200) {
        this.datos = result.data;
      }
    });
  }


  articuloselect: Guest = new Guest("", "", "", "", "");

  @ViewChild(MatTable) tabla1!: MatTable<Guest>;

  editarFila(cod: number) {

  }

  borrarFila(cod: number) {
    if (confirm("¿Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {

  }
}



export class Guest {
  constructor(public id: string, public document: string, public fullName: string, public email: string, public role: string) {
  }
}

