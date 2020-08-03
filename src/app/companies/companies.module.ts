import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyModule } from '../shared/company/company.module';
import { RouterModule } from '@angular/router';
import { CompaniesRoutingModule } from './companies-routing.module';



@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CompanyModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
