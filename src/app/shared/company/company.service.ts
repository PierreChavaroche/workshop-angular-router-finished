import { Injectable } from '@angular/core';
import { ICompany } from './company.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies: ICompany[] = [
    {
      id: 'google',
      name: 'Google',
      logoSrc: 'assets/logos/Logo-Google.svg',
      foundingYear: 1998
    },
    {
      id: 'sixdata',
      name: 'sixData',
      logoSrc: 'assets/logos/Logo-sixData.png',
      foundingYear: 2002
    }
  ];

  constructor() {

  }

  getList() {
    return this.companies;
  }

  get(id: string) {
    let company: ICompany;

    if (id) {
      company = this.companies.find(companyLoop => companyLoop.id === id);
    }

    return company;
  }
}
