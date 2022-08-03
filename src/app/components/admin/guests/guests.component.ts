import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnas: string[] = ['tipoDoc', 'numId', 'nombre', 'celular', 'correo','borrar', 'editar'];

  datos: Huesped[] = [new Huesped("Cedula de ciudadania","29837645","Andres Polanco", "023948765", "pvrojas@gmail.com"),
  new Huesped("Cedula de extranjeria","23453489076","Julian Perez", "023948765", "jepolancos@gmail.com"),
  new Huesped("tarjeta de identidad","0912874","Marcos Rodriguez", "023948765", "casogamoso@gmail.com"),
  new Huesped("Registro Civil","9587350","Paula Rojas", "023948765", "dkrojas@gmail.com"),
  new Huesped("Pasaporte","023451984376","Claudia Sogamoso", "023948765", "famartinez@gmail.com"),
  new Huesped("NIT","29384765","Fernando Martinez", "023948765", "mifonseca@gmail.com"),
  new Huesped("Cedula de ciudadania","1000472468","Julian Polanco", "023948765", "jepolancos@gmail.com"),
  new Huesped("Cedula de ciudadania","29837645","Andres Polanco", "023948765", "pvrojas@gmail.com"),
  new Huesped("Cedula de extranjeria","23453489076","Julian Perez", "023948765", "jepolancos@gmail.com"),
  new Huesped("tarjeta de identidad","0912874","Marcos Rodriguez", "023948765", "casogamoso@gmail.com"),
  new Huesped("Registro Civil","9587350","Paula Rojas", "023948765", "dkrojas@gmail.com"),
  new Huesped("Pasaporte","023451984376","Claudia Sogamoso", "023948765", "famartinez@gmail.com"),
  new Huesped("NIT","29384765","Fernando Martinez", "023948765", "mifonseca@gmail.com")
  ];

  articuloselect: Huesped = new Huesped("","","","","");

  @ViewChild(MatTable) tabla1!: MatTable<Huesped>;
  
  editarFila(cod: number){
  
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



  export class Huesped {
    constructor(public tipoDoc: string, public numId: string, public nombre: string,public celular:string,public correo:string ) {
  }
}

