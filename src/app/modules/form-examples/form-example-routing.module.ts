import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGroupComponent } from './components/form-group/form-group.component';



const routes: Routes = [
  { path: '', component: FormGroupComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
],
  exports: [RouterModule]
})
export class FormExampleRoutingModule { }
