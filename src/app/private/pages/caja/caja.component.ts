import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.scss']
})
export class CajaComponent implements OnInit {

  constructor() { 
    console.log('constructor caja');
  }

  ngOnInit(): void {
    console.log('componente CAJA');
  }

}
