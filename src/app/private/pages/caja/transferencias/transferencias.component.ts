import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { ValidatorsService } from 'src/app/services/validators.service';
import { CustomValidators } from 'src/app/utils/validators/CustomValidators';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.scss']
})
export class TransferenciasComponent implements OnInit {

  public form: FormGroup
  controls = [
    { name: 'control0', value: '' }
    // otros controles
  ];
  
  private cambioControlSubject: Subject<boolean> = new Subject<boolean>();

  public get control0(){return this.form.get('control0')}

  constructor(private formBuilder: FormBuilder, public validatorsService: ValidatorsService) {
    console.log('constructor transferencias');
    this.form = this.formBuilder.group({});
    console.log('termina de crear form group');
  }

  ngOnInit(): void {
    console.log(this.form.controls);
    this.form.valueChanges.subscribe((val)=>{
      console.log('value cambia');
    })
  }

  agregarControl(){    
    this.controls.push({name: `control${this.controls.length}`, value: ''})
  }

  quitarControl(){    
    this.controls.pop()
  }

  submit() {
    CustomValidators.validateForm(this.form);
  }

}
