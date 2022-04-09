import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAgencies } from 'src/app/agencies/interfaces/agencies';

@Component({
  selector: 'app-card-agency',
  templateUrl: './card-agency.component.html',
  styleUrls: ['./card-agency.component.scss']
})
export class CardAgencyComponent implements OnInit {
  @Input() agencies: IAgencies[] = [];
  @Output() addFavorite: EventEmitter<IAgencies> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
  }

  selectFavorite(agency: IAgencies) {
    const a = agency;
    a.favorite = !a.favorite;
    this.addFavorite.emit(a);
  }

  navigate(id: number) {
    this.router.navigate(['./editar', id], { relativeTo: this.route });
  }

}
