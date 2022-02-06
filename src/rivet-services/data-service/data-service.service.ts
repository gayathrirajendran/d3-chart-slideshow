import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getData(id: string): Observable<any> {
    const dataMap: { [key: string]: string } = {
      'bar': '/assets/mock-data/bar-chart-data.json',
      'line': '/assets/mock-data/line-chart-data.json',
    }
    return this.http.get(dataMap[id]);
  }
}
