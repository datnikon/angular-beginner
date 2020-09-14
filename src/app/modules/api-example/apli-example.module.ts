import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApliExampleRoutingModule } from './apli-example-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ApiExampleService } from './api-example.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApliExampleRoutingModule,
    HttpClientModule
  ],
  providers:[ApiExampleService]
})
export class ApliExampleModule { }
