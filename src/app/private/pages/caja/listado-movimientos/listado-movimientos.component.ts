import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-movimientos',
  templateUrl: './listado-movimientos.component.html',
  styleUrls: ['./listado-movimientos.component.scss']
})
export class ListadoMovimientosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('componente LISTADO-MOVIMIENTOS');
  }

}
