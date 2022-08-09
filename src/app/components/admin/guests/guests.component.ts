import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { Guest } from 'src/app/models/guest';
import { ResponseService } from 'src/app/models/response-service';
import { UserList } from 'src/app/models/user-list';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';


@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  articuloselect: Guest = new Guest("", "", "", "", "");

  @ViewChild(MatTable)
  dataSource!: MatTable<Guest>;

  columnas: string[] = ['document', 'fullName', 'email', 'role', 'borrar', 'editar'];

  datos: Guest[] = [];

  constructor(private httpClient: HttpClientService, private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const spinner = this.spinner.start("Cargando listado de clientes...");
    this.httpClient.get<ResponseService<UserList>>(ENDPOINTS.getAllUsersFromAdmin).subscribe((result: ResponseService<UserList>) => {
      if (result.status == 200) {
        this.datos = result.data;
      }
      this.spinner.stop(spinner);
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