import { NgModule } from "@angular/core";
import { MontoDirective } from "./monto.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [MontoDirective],
    imports: [
      CommonModule
    ],
    exports:[MontoDirective]
  })
  
  export class CommonModulesModule { }