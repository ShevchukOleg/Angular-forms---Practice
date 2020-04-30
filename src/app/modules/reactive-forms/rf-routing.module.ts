import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RfExamplesComponent } from './components/rf-examples/rf-examples.component';


const routes: Routes = [
  { path: '', component: RfExamplesComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RfRoutingModule { }
