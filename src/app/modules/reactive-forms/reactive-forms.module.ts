import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfExamplesComponent } from './components/rf-examples/rf-examples.component';
import { RfRoutingModule } from './rf-routing.module';



@NgModule({
  declarations: [RfExamplesComponent],
  imports: [
    CommonModule,
    RfRoutingModule
  ]
})
export class ReactiveFormsModule { }
