import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiExampleComponent } from './components/api-example.component';


const routes: Routes = [
  {
    path:'',component: ApiExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApliExampleRoutingModule { }
