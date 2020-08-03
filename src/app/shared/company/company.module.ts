import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CompanyComponent
  ]
})
export class CompanyModule { }
