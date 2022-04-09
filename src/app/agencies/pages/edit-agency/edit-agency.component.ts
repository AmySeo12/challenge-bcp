import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAgencies } from 'src/app/agencies/interfaces/agencies';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { AgenciesService } from '../../services/agencies.service';

@Component({
  templateUrl: './edit-agency.component.html',
  styleUrls: ['./edit-agency.component.scss']
})
export class EditAgencyComponent implements OnInit {
  agency: IAgencies

  constructor(
    private agenciesService: AgenciesService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getParams()
  }

  getParams() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.agenciesService.getAgenciesById(id).subscribe(res => this.agency = res)
  }

  updateAgency(agency: IAgencies) {
    this.agenciesService.updateAgencies(agency)
      .subscribe((_) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

}
