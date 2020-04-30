import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdfExamplesComponent } from './components/tdf-examples/tdf-examples.component';
import { TdfRoutingRoutingModule } from './tdf-routing-routing.module';
import { FormsModule } from '@angular/forms';
import { PaternDirective } from './tdfValidators/customValidatorExample';



@NgModule({
  declarations: [TdfExamplesComponent, PaternDirective],
  imports: [
    CommonModule,
    FormsModule,
    TdfRoutingRoutingModule
  ]
})
export class TemplateDrivenFormsModule { }
