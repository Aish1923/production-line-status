import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MachineDetail } from '../../data/interfaces/state';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  /*fetch data from dummy JSON */
  getData(): Observable<MachineDetail[]> {
    return this.http.get<MachineDetail[]>('assets/data.json');
  }
}

