import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('componente LISTADO-PEDIDOS');
  }

}
