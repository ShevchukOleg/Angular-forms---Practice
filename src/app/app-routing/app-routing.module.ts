import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'reactive', loadChildren: () => import('../modules/reactive-forms/reactive-forms.module').then(m => m.RFormsModule) },
  {
    path: 'tempalte-driving', loadChildren: () =>
      import('../modules/template-driven-forms/template-driven-forms.module').then(m => m.TemplateDrivenFormsModule)
  },
  { path: '', redirectTo: 'tempalte-driving', pathMatch: 'full' },
  { path: '**', redirectTo: 'tempalte-driving' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
