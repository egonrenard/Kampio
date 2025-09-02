import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camp } from '../modules/camp';

@Injectable({ providedIn: 'root' })
export class CampService {
  private url = 'assets/test-data/camps.json';

  constructor(private http: HttpClient) {}

  getCamps(): Observable<Camp[]> {
    return this.http.get<Camp[]>(this.url);
  }
}
