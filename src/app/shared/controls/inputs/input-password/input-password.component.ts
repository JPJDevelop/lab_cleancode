import { Component } from '@angular/core';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})

export class InputPasswordComponent {  

  constructor(public validatorsService: ValidatorsService){}

}
