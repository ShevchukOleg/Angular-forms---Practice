import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdfExamplesComponent } from './components/tdf-examples/tdf-examples.component';


const routes: Routes = [
  { path: '', component: TdfExamplesComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdfRoutingRoutingModule { }
