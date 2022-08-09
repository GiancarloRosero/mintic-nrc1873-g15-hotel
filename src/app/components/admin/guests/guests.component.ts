import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { Guest } from 'src/app/models/guest';
import { ResponseService } from 'src/app/models/response-service';
import { UserList } from 'src/app/models/user-list';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  articuloselect: Guest = new Guest("", "", "", "", "");

  @ViewChild(MatTable)
  dataSource!: MatTable<Guest>;

  columnas: string[] = ['id', 'document', 'fullName', 'email', 'role', 'borrar', 'editar'];

  datos: Guest[] = [];

  constructor(private httpClient: HttpClientService) { }

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

  editarFila(cod: number): void {
  }

  borrarFila(cod: number): void {
    if (confirm("¿Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.dataSource.renderRows();
    }
  }

  agregar(): void {
  }

}