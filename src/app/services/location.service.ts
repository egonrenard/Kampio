import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Location } from '../modules/location';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private url = 'assets/test-data/locations.json';

  constructor(private http: HttpClient) {}

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.url);
  }

  getLocationById(id: number): Observable<Location | undefined> {
    return this.getLocations().pipe(
      map(locations => locations.find(loc => loc.id === id))
    );
  }
}
