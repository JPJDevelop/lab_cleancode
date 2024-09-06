import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-app',
  templateUrl: './private-app.component.html',
  styleUrls: ['./private-app.component.scss']
})
export class PrivateAppComponent implements OnInit {

  constructor() { console.log('constructor private'); }

  ngOnInit(): void {
    console.log('componente PRIVATE');
  }

}
