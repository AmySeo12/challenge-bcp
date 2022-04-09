import { Component, OnInit } from '@angular/core';
import { IAgencies } from 'src/app/agencies/interfaces/agencies';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { AgenciesService } from '../../services/agencies.service';

@Component({
  templateUrl: './list-agencies.component.html',
  styleUrls: ['./list-agencies.component.scss']
})
export class ListAgenciesComponent implements OnInit {
  listAgencies: IAgencies[] = [];
  listAgenciesTemp: IAgencies[] = [];

  constructor(
    private agenciesService: AgenciesService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.dialogService.open(SpinnerComponent);
    this.agenciesService.getAgencies().subscribe(res => {
      this.listAgencies = res;
      this.listAgenciesTemp = res;
      this.dialogService.close(2000)
    });
  }

  onSearch(value: string) {
    value = value.toLocaleLowerCase().trim();
    const dataTemp = [...this.listAgencies];
    let data = dataTemp.filter(d => {
      return d.agencia.toLowerCase().includes(value);
    })
    this.listAgenciesTemp = data;
  }

  addFavorite(agency: IAgencies) {
    const fav = agency.favorite ? 'agregó' : 'eliminó'
    this.agenciesService.updateAgencies(agency).subscribe((_) => this.dialogService.open(ToastComponent, { data: `Se ${fav} a tus favoritos`, timer: 3000 }));
  }
}
