import { Component, OnInit, Input } from '@angular/core';
import { ICompany } from './company.interface';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input() company: ICompany;

  constructor() { }

  ngOnInit(): void {
  }

}
