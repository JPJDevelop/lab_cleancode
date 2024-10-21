import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[monto]'
})
export class MontoDirective {

  private iptValue = '';

  constructor(private ngControl: NgControl, private element: ElementRef) {}

  ngAfterViewInit() {
    if (!!this.element.nativeElement.value) {
      this._replaceDotForCommaHTML();
    }
  }

  private _replaceDotForCommaHTML() {
    const htmlVal = this._transformarADosDecimalesDespuesDeLaComa();
    this.element.nativeElement.value = this._prepararStringARetornar(htmlVal);
  }


  private _transformarADosDecimalesDespuesDeLaComa() {    
    const values = this.element.nativeElement.value.split(/[.,]/);
    values[1] = ((values[1] !== undefined ? values[1] : '') + '00').slice(0, 2);
    const htmlVal = (values[0] || '0') + values[1];
    return htmlVal;
  }

  @HostListener('input', ['$event.target.value']) input(value: string): void {
    this.iptValue = this._replaceInitialValue(value);
    this.iptValue = this._agregarCerosSiEsNecesario(this.iptValue);
    this.iptValue = this._prepararStringARetornar(this.iptValue);
    this._finalizarYSetearValorInput(this.iptValue);
  }


  private _finalizarYSetearValorInput(value: string): void {
    if (this.ngControl?.control) 
      this.ngControl.control.patchValue(parseFloat(this.iptValue.replace(/\./g, '').replace(/\,/g, '.')))
    
    this.element.nativeElement.value = this.iptValue
  }

  private _agregarCerosSiEsNecesario(value: any): string {
    const zeros = value.length < 4;
    value = value.padStart(zeros ? 3 : null, '0');
    return value;
  }


  private _replaceInitialValue(value: string): string {
    value = this._obtenerValorSinComa(value);
    value = value.replace(/^[0]+|[^0-9]/g, '');
    return value;
  }


  private _obtenerValorSinComa(value: string): string {
    return value.replace(/\,/, '');
  }

  private _prepararStringARetornar(value: any): string {
    const parteEntera = value.slice(0, value.length - 2);
    const parteDecimal = value.slice(-2);
    const parteEnteraFormateada = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const valorFormateado = parteEnteraFormateada + ',' + parteDecimal;
    return valorFormateado;
  }

}
