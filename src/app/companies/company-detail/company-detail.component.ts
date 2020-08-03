import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICompany } from 'src/app/shared/company/company.interface';
import { CompanyService } from 'src/app/shared/company/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  id: string;
  company$: Observable<ICompany>;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // just working once

    this.company$ = this.route.params.pipe(
      map(params => params['id'] as string),
      map(id => this.companyService.get(id))
    );
  }

}
