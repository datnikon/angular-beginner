import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormExampleRoutingModule } from './form-example-routing.module';
import { ListAccountComponent } from './components/list-account/list-account.component';



@NgModule({
  declarations: [FormGroupComponent, ListAccountComponent],
  imports: [
    CommonModule,
    FormExampleRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormExampleModule { }
