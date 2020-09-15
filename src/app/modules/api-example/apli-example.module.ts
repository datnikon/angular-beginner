import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApliExampleRoutingModule } from './apli-example-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ApiExampleService } from './api-example.service';
import { ApiExampleComponent } from './components/api-example.component';

@NgModule({
  declarations: [ApiExampleComponent],
  imports: [
    CommonModule,
    ApliExampleRoutingModule,
    HttpClientModule
  ],
  providers:[ApiExampleService]
})
export class ApliExampleModule { }
