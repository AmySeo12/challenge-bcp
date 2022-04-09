import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Agencies, IAgencies, IAgenciesResponse } from '../../agencies/interfaces/agencies';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  constructor(
    private http: HttpClient
  ) { }

  getAgencies(): Observable<IAgencies[]> {
    return this.http.get<IAgenciesResponse[]>('/assets/data/agencias.json').pipe(
      map(response => {
        const agencies = this.agencies || new Agencies(response).agency;
        localStorage.setItem('agencies', JSON.stringify(agencies));
        return agencies;
      })
    );
  }

  updateAgencies(body: IAgencies) {
    return this.http.put<IAgenciesResponse[]>(`${environment.apiUrl}/agencies/update`, body);
  }

  getAgenciesById(id: number): Observable<IAgencies> {
    return this.http.get<IAgencies>(`${environment.apiUrl}/agencies/${id}`);
  }

  get agencies() {
    return JSON.parse(localStorage.getItem('agencies')) as IAgencies[];
  }
}
